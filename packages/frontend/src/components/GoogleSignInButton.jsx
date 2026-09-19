import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { API_BASE } from '../services/api';

// Must match GOOGLE_CLIENT_ID in packages/backend/accounts/views.py: the backend
// rejects any Google token that was issued to a different client.
const GOOGLE_CLIENT_ID = '21555557010-1v1skvapn1o9ldhu25tv7t3f5q74dtpm.apps.googleusercontent.com';

/**
 * Google's own "Sign in with Google" button, rendered by Google Identity Services.
 *
 * This replaces a custom <button> that only called google.accounts.id.prompt()
 * (One Tap). One Tap is suppressed whenever the browser has no Google session or
 * the user dismissed it recently (an exponential cooldown), and Firefox and Safari
 * restrict it, so for many users that button did nothing or showed a misleading
 * error. renderButton opens Google's popup on every click.
 *
 * @param {'continue_with'|'signup_with'|'signin_with'} props.text - button label
 * @param {(message: string) => void} props.onError - show an error ('' clears it)
 * @param {(busy: boolean) => void} props.onBusyChange - page-level loading state
 * @param {boolean} props.busy - dims and disables the button while true
 */
export default function GoogleSignInButton({ text = 'continue_with', onError, onBusyChange, busy = false }) {
  const containerRef = useRef(null);
  const onCredentialRef = useRef(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleCredential = async ({ credential }) => {
    onBusyChange?.(true);
    onError?.('');
    try {
      const res = await fetch(`${API_BASE}/auth/google/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Google sign-in failed');
      }
      login(data.user, data.token);
      navigate('/cabinet');
    } catch (err) {
      onError?.(err.message);
    } finally {
      onBusyChange?.(false);
    }
  };

  // Google holds on to the callback given to initialize(), so point it at a ref
  // that always has the latest handler, instead of re-rendering the button
  // every time the page re-renders.
  useEffect(() => {
    onCredentialRef.current = handleCredential;
  });

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    // index.html loads the GIS script async, so it can arrive after this mounts.
    // Poll briefly: the old single check never initialised Google on slow links.
    const render = () => {
      if (cancelled) return;
      const gsi = window.google?.accounts?.id;
      const el = containerRef.current;
      if (!gsi || !el) {
        if (++attempts < 50) setTimeout(render, 200); // give up after ~10s
        return;
      }
      try {
        gsi.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: (response) => onCredentialRef.current?.(response),
        });
        el.replaceChildren(); // StrictMode mounts twice in dev: keep one button
        gsi.renderButton(el, {
          theme: 'outline',
          size: 'large',
          shape: 'rectangular',
          text,
          width: Math.min(el.offsetWidth || 400, 400), // GIS caps width at 400px
        });
      } catch (err) {
        // A Google script failure must never take the page (and email login) down.
        console.warn('Google sign-in unavailable:', err);
      }
    };
    render();

    return () => {
      cancelled = true;
    };
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={`w-full mb-6 min-h-[44px] flex justify-center transition-opacity ${busy ? 'pointer-events-none opacity-50' : ''}`}
    />
  );
}
