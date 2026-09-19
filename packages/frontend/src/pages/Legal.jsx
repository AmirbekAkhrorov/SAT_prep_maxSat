import { Link } from 'react-router-dom';

// Google requires public Privacy Policy and Terms of Service links before an
// OAuth app can be published, so these pages must stay outside ProtectedRoute.
// Every data statement below is taken from what the code actually stores; keep
// them in sync when that changes (e.g. new fields on User or UserStats).
const CONTACT_EMAIL = 'akhrorovamirbek@gmail.com';
const LAST_UPDATED = 'September 19, 2026';

function LegalLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-navy-950 text-navy-700 dark:text-cream-300">
      <header className="border-b border-cream-200 dark:border-navy-800">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-semibold text-navy-900 dark:text-cream-100">
            max<span className="text-gold-500 font-black">SAT</span>
          </Link>
          <Link to="/" className="font-sans text-sm text-navy-600 dark:text-cream-400 hover:text-gold-600 transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="font-display text-4xl font-bold text-navy-900 dark:text-cream-100 mb-2">{title}</h1>
        <p className="font-sans text-sm text-navy-500 dark:text-cream-400 mb-10">Last updated: {LAST_UPDATED}</p>
        <div className="space-y-10 font-body leading-relaxed">{children}</div>
      </main>

      <footer className="border-t border-cream-200 dark:border-navy-800">
        <div className="max-w-3xl mx-auto px-6 py-6 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-navy-500 dark:text-cream-400">
          <Link to="/privacy" className="hover:text-gold-600 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-gold-600 transition-colors">Terms of Service</Link>
          <span>© {new Date().getFullYear()} maxSAT</span>
        </div>
      </footer>
    </div>
  );
}

function Section({ heading, children }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-navy-900 dark:text-cream-100 mb-3">{heading}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function List({ children }) {
  return <ul className="list-disc pl-6 space-y-2">{children}</ul>;
}

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:underline">
      {children}
    </a>
  );
}

function Email() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold-600 hover:underline">
      {CONTACT_EMAIL}
    </a>
  );
}

export function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        maxSAT is a free SAT Math practice website at https://maxsat.netlify.app. This page explains, in plain
        language, what information the site collects when you use it, how that information is used, and what you
        can do about it.
      </p>

      <Section heading="Information we collect">
        <p>When you create an account:</p>
        <List>
          <li>Your email address, a username, and your password. Passwords are stored only in hashed form, so no one can read them.</li>
          <li>
            If you choose to sign in with Google: your Google account ID, email address, name, and a link to your
            profile picture, which Google shares with us when you sign in. We never receive your Google password.
          </li>
        </List>
        <p>When you practice:</p>
        <List>
          <li>The answers you submit, whether they were correct, and how long you spent on each question.</li>
          <li>Your timed test sessions and their results.</li>
          <li>Notes you write on questions.</li>
          <li>Statistics based on this activity, such as points, tests completed, questions answered, accuracy, and streaks.</li>
        </List>
        <p>
          If you use the question upload feature, the PDF you upload is read to extract questions. The file itself
          is not stored.
        </p>
        <p>
          To keep you signed in, the site saves a login token and your basic profile (username and email) in your
          browser&apos;s local storage. Logging out removes them. The site does not use advertising or analytics
          trackers.
        </p>
      </Section>

      <Section heading="How we use it">
        <List>
          <li>To create your account and sign you in.</li>
          <li>To check your answers, show explanations, and track your progress.</li>
          <li>To run the leaderboard.</li>
          <li>
            To protect the service. For example, your IP address is used briefly to limit how many requests can be
            made in a short time, which guards against abuse.
          </li>
        </List>
        <p>We do not sell your information, and we do not use it for advertising.</p>
      </Section>

      <Section heading="What other users can see">
        <p>
          If you appear on the leaderboard, other signed-in users can see your username and your practice
          statistics (points, tests completed, accuracy, and rank). Your email address is never shown to other
          users.
        </p>
        <p>Your answers, notes, and test results are visible only to you.</p>
      </Section>

      <Section heading="Services we rely on">
        <List>
          <li>
            <strong>Google</strong> handles sign-in if you choose &quot;Continue with Google&quot;, and provides the
            fonts used on the site. See the <ExternalLink href="https://policies.google.com/privacy">Google Privacy Policy</ExternalLink>.
          </li>
          <li>
            <strong>Desmos</strong> provides the built-in calculator, which loads from its servers. See the{' '}
            <ExternalLink href="https://www.desmos.com/privacy">Desmos Privacy Policy</ExternalLink>.
          </li>
          <li>
            <strong>Netlify</strong> hosts this website, and <strong>Render</strong> hosts the server and database
            that store the information described above.
          </li>
        </List>
      </Section>

      <Section heading="How long we keep it">
        <p>
          We keep your account and practice history for as long as your account exists. When an account is
          deleted, its practice history, notes, test results, and statistics are deleted with it.
        </p>
      </Section>

      <Section heading="Your choices">
        <p>
          To see, correct, or delete the information we hold about you, or to delete your account, email{' '}
          <Email /> and we will take care of it.
        </p>
      </Section>

      <Section heading="Changes to this policy">
        <p>If this policy changes, we will update this page and the date at the top.</p>
      </Section>

      <Section heading="Contact">
        <p>
          Questions about this policy? Email <Email />.
        </p>
      </Section>
    </LegalLayout>
  );
}

export function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service">
      <p>
        maxSAT is a free website for practicing SAT Math at https://maxsat.netlify.app. By creating an account or
        using the site, you agree to these terms. If you do not agree, please do not use the site.
      </p>

      <Section heading="Your account">
        <p>
          Please give accurate information when you sign up and keep your password private. You are responsible for
          what happens under your account. Choose a username that is appropriate to show to other students, because
          it can appear on the leaderboard.
        </p>
      </Section>

      <Section heading="Acceptable use">
        <p>When using maxSAT, please do not:</p>
        <List>
          <li>Try to access other people&apos;s accounts or data.</li>
          <li>Try to disrupt, overload, or break the site.</li>
          <li>Copy the question bank in bulk, for example with automated tools.</li>
          <li>Create fake accounts or otherwise manipulate the leaderboard.</li>
          <li>Use the site for anything unlawful.</li>
        </List>
        <p>We may suspend or remove accounts that break these rules.</p>
      </Section>

      <Section heading="Practice content">
        <p>
          The questions and explanations are provided for practice. We work to keep them accurate, but we cannot
          guarantee that every question and explanation is free of errors, or that using maxSAT will change your
          test score.
        </p>
        <p>
          SAT® is a trademark registered by the College Board, which is not affiliated with, and does not endorse,
          maxSAT.
        </p>
      </Section>

      <Section heading="Availability">
        <p>
          maxSAT is provided free of charge and as is. Features may change, and the site may be unavailable at
          times or be discontinued.
        </p>
      </Section>

      <Section heading="Privacy">
        <p>
          How we handle your information is explained in our{' '}
          <Link to="/privacy" className="text-gold-600 hover:underline">Privacy Policy</Link>.
        </p>
      </Section>

      <Section heading="Changes to these terms">
        <p>
          We may update these terms. When we do, we will change the date at the top of this page. Continuing to use
          the site after an update means you accept the updated terms.
        </p>
      </Section>

      <Section heading="Contact">
        <p>
          Questions about these terms? Email <Email />.
        </p>
      </Section>
    </LegalLayout>
  );
}
