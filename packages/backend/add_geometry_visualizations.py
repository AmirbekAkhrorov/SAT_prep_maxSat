"""
Script to add visualizations to all geometry questions.
Comprehensive version with proper 3D shapes and advanced figures.
"""

import json
import re
import math
from pathlib import Path


# ============== 3D SHAPES ==============

def create_sphere_viz(radius=None, show_volume=False):
    """Create a sphere with 3D appearance."""
    r_label = f"r = {radius}" if radius else "r"
    return {
        "type": "geometry",
        "config": {
            "width": 240,
            "height": 200,
            "shapes": [
                # Main circle (sphere outline)
                {"type": "circle", "cx": 120, "cy": 100, "r": 70,
                 "showCenter": True, "showRadius": True, "radiusAngle": 25,
                 "labels": {"center": "O", "radius": r_label},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                # Equator ellipse for 3D effect
                {"type": "ellipse", "cx": 120, "cy": 100, "rx": 70, "ry": 18,
                 "style": {"fill": "none", "stroke": "#1e3a5f", "strokeWidth": 1.5, "strokeDasharray": "5,3"}}
            ]
        }
    }


def create_hemisphere_viz(radius=None):
    """Create a hemisphere visualization."""
    r_label = f"r = {radius}" if radius else "r"
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 200,
            "shapes": [
                # Dome (semicircle) using path would be ideal, using arc approximation
                {"type": "circle", "cx": 130, "cy": 140, "r": 70,
                 "showCenter": False, "showRadius": False,
                 "labels": {},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Cover bottom half with white rectangle
                {"type": "rectangle", "x": 55, "y": 140, "width": 150, "height": 60,
                 "labels": {}, "style": {"fill": "white", "stroke": "white"}},
                # Base ellipse
                {"type": "ellipse", "cx": 130, "cy": 140, "rx": 70, "ry": 18,
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Radius line
                {"type": "line", "x1": 130, "y1": 140, "x2": 200, "y2": 140,
                 "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
                {"type": "point", "x": 130, "y": 140, "radius": 3, "style": {"fill": "#1e3a5f"}},
                {"type": "text", "x": 165, "y": 132, "text": r_label, "fontSize": 12}
            ]
        }
    }


def create_pyramid_viz(base_side=None, height=None):
    """Create a square pyramid visualization."""
    b_label = str(base_side) if base_side else "a"
    h_label = f"h = {height}" if height else "h"
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 220,
            "shapes": [
                # Base (parallelogram for 3D effect)
                {"type": "polygon", "points": [[70, 170], [190, 170], [220, 140], [100, 140]],
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Front face
                {"type": "polygon", "points": [[130, 40], [70, 170], [190, 170]],
                 "style": {"fill": "#fde68a", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Right face
                {"type": "polygon", "points": [[130, 40], [190, 170], [220, 140]],
                 "style": {"fill": "#fcd34d", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Hidden edges (dashed)
                {"type": "line", "x1": 130, "y1": 40, "x2": 100, "y2": 140,
                 "dashed": True, "style": {"stroke": "#6b7280", "strokeWidth": 1}},
                {"type": "line", "x1": 100, "y1": 140, "x2": 70, "y2": 170,
                 "dashed": True, "style": {"stroke": "#6b7280", "strokeWidth": 1}},
                # Height line
                {"type": "line", "x1": 130, "y1": 40, "x2": 130, "y2": 155,
                 "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
                # Labels
                {"type": "text", "x": 130, "y": 188, "text": b_label, "fontSize": 12, "textAnchor": "middle"},
                {"type": "text", "x": 140, "y": 100, "text": h_label, "fontSize": 12, "style": {"fill": "#dc2626"}}
            ]
        }
    }


def create_frustum_viz(r1=None, r2=None, height=None):
    """Create a frustum (truncated cone) visualization."""
    r1_label = f"r₁ = {r1}" if r1 else "r₁"
    r2_label = f"r₂ = {r2}" if r2 else "r₂"
    h_label = f"h = {height}" if height else "h"
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 220,
            "shapes": [
                # Body (trapezoid shape)
                {"type": "polygon", "points": [[100, 50], [180, 50], [210, 160], [70, 160]],
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Top ellipse
                {"type": "ellipse", "cx": 140, "cy": 50, "rx": 40, "ry": 12,
                 "style": {"fill": "#fde68a", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Bottom ellipse
                {"type": "ellipse", "cx": 140, "cy": 160, "rx": 70, "ry": 18,
                 "style": {"fill": "#fcd34d", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Height line
                {"type": "line", "x1": 225, "y1": 50, "x2": 225, "y2": 160,
                 "style": {"stroke": "#6b7280", "strokeWidth": 1}},
                # Radius lines
                {"type": "line", "x1": 140, "y1": 50, "x2": 180, "y2": 50,
                 "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1}},
                {"type": "line", "x1": 140, "y1": 160, "x2": 210, "y2": 160,
                 "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1}},
                # Labels
                {"type": "text", "x": 160, "y": 42, "text": r1_label, "fontSize": 11},
                {"type": "text", "x": 175, "y": 178, "text": r2_label, "fontSize": 11},
                {"type": "text", "x": 235, "y": 108, "text": h_label, "fontSize": 11}
            ]
        }
    }


def create_tetrahedron_viz(edge=None):
    """Create a regular tetrahedron visualization."""
    e_label = f"edge = {edge}" if edge else "a"
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 220,
            "shapes": [
                # Base triangle
                {"type": "polygon", "points": [[60, 180], [200, 180], [130, 120]],
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Front left face
                {"type": "polygon", "points": [[130, 40], [60, 180], [130, 120]],
                 "style": {"fill": "#fde68a", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Front right face
                {"type": "polygon", "points": [[130, 40], [130, 120], [200, 180]],
                 "style": {"fill": "#fcd34d", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Hidden edge
                {"type": "line", "x1": 130, "y1": 40, "x2": 60, "y2": 180,
                 "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                # Label
                {"type": "text", "x": 130, "y": 200, "text": e_label, "fontSize": 12, "textAnchor": "middle"}
            ]
        }
    }


def create_cube_viz(side=None, show_diagonal=False):
    """Create a proper 3D cube visualization."""
    label = str(side) if side else "s"
    shapes = [
        # Front face
        {"type": "rectangle", "x": 50, "y": 80, "width": 100, "height": 100,
         "labels": {}, "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
        # Top face edges
        {"type": "line", "x1": 50, "y1": 80, "x2": 100, "y2": 40, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
        {"type": "line", "x1": 100, "y1": 40, "x2": 200, "y2": 40, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
        {"type": "line", "x1": 200, "y1": 40, "x2": 150, "y2": 80, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
        # Right face edges
        {"type": "line", "x1": 150, "y1": 80, "x2": 200, "y2": 40, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
        {"type": "line", "x1": 150, "y1": 180, "x2": 200, "y2": 140, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
        {"type": "line", "x1": 200, "y1": 40, "x2": 200, "y2": 140, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
        # Label
        {"type": "text", "x": 100, "y": 200, "text": label, "fontSize": 14, "textAnchor": "middle"}
    ]

    if show_diagonal:
        # Space diagonal
        shapes.append({"type": "line", "x1": 50, "y1": 180, "x2": 200, "y2": 40,
                      "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 2}})
        shapes.append({"type": "text", "x": 135, "y": 100, "text": "d", "fontSize": 14, "style": {"fill": "#dc2626"}})

    return {
        "type": "geometry",
        "config": {"width": 260, "height": 220, "shapes": shapes}
    }


def create_cylinder_viz(radius=None, height=None):
    """Create a proper 3D cylinder visualization."""
    r_label = f"r = {radius}" if radius else "r"
    h_label = f"h = {height}" if height else "h"
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 220,
            "shapes": [
                # Top ellipse
                {"type": "ellipse", "cx": 130, "cy": 50, "rx": 60, "ry": 20,
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Body sides
                {"type": "line", "x1": 70, "y1": 50, "x2": 70, "y2": 160, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "x1": 190, "y1": 50, "x2": 190, "y2": 160, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                # Bottom ellipse
                {"type": "ellipse", "cx": 130, "cy": 160, "rx": 60, "ry": 20,
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Radius line
                {"type": "line", "x1": 130, "y1": 50, "x2": 190, "y2": 50,
                 "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
                {"type": "point", "x": 130, "y": 50, "radius": 3, "style": {"fill": "#1e3a5f"}},
                # Height indicator
                {"type": "line", "x1": 205, "y1": 50, "x2": 205, "y2": 160,
                 "style": {"stroke": "#6b7280", "strokeWidth": 1}},
                # Labels
                {"type": "text", "x": 160, "y": 40, "text": r_label, "fontSize": 12},
                {"type": "text", "x": 215, "y": 110, "text": h_label, "fontSize": 12}
            ]
        }
    }


def create_cone_viz(radius=None, height=None, slant_height=None):
    """Create a proper 3D cone visualization."""
    r_label = f"r = {radius}" if radius else "r"
    h_label = f"h = {height}" if height else "h"
    shapes = [
        # Cone body (triangle)
        {"type": "polygon", "points": [[130, 30], [60, 170], [200, 170]],
         "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
        # Base ellipse
        {"type": "ellipse", "cx": 130, "cy": 170, "rx": 70, "ry": 20,
         "style": {"fill": "#fde68a", "stroke": "#1e3a5f", "strokeWidth": 2}},
        # Height line (dashed)
        {"type": "line", "x1": 130, "y1": 30, "x2": 130, "y2": 170,
         "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
        # Radius line
        {"type": "line", "x1": 130, "y1": 170, "x2": 200, "y2": 170,
         "dashed": True, "style": {"stroke": "#2563eb", "strokeWidth": 1.5}},
        # Labels
        {"type": "text", "x": 140, "y": 105, "text": h_label, "fontSize": 12, "style": {"fill": "#dc2626"}},
        {"type": "text", "x": 165, "y": 188, "text": r_label, "fontSize": 12, "style": {"fill": "#2563eb"}}
    ]

    if slant_height:
        shapes.append({"type": "text", "x": 175, "y": 95, "text": f"l = {slant_height}", "fontSize": 11})

    return {
        "type": "geometry",
        "config": {"width": 260, "height": 210, "shapes": shapes}
    }


def create_rectangular_prism_viz(length=None, width=None, height=None):
    """Create a 3D rectangular prism visualization."""
    l_label = str(length) if length else "l"
    w_label = str(width) if width else "w"
    h_label = str(height) if height else "h"
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 220,
            "shapes": [
                # Front face
                {"type": "rectangle", "x": 40, "y": 80, "width": 120, "height": 90,
                 "labels": {}, "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Top face edges
                {"type": "line", "x1": 40, "y1": 80, "x2": 90, "y2": 45, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "x1": 90, "y1": 45, "x2": 210, "y2": 45, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "x1": 210, "y1": 45, "x2": 160, "y2": 80, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                # Right face edges
                {"type": "line", "x1": 160, "y1": 80, "x2": 210, "y2": 45, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "x1": 160, "y1": 170, "x2": 210, "y2": 135, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "x1": 210, "y1": 45, "x2": 210, "y2": 135, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                # Labels
                {"type": "text", "x": 100, "y": 190, "text": l_label, "fontSize": 12, "textAnchor": "middle"},
                {"type": "text", "x": 225, "y": 95, "text": h_label, "fontSize": 12},
                {"type": "text", "x": 185, "y": 35, "text": w_label, "fontSize": 12}
            ]
        }
    }


# ============== CIRCLES ==============

def create_circle_viz(radius=None, diameter=None):
    """Create basic circle visualization."""
    labels = {"center": "O"}
    if radius:
        labels["radius"] = f"r = {radius}"
    elif diameter:
        labels["radius"] = f"d = {diameter}"
    else:
        labels["radius"] = "r"
    return {
        "type": "geometry",
        "config": {
            "width": 240,
            "height": 200,
            "shapes": [{
                "type": "circle", "cx": 120, "cy": 100, "r": 70,
                "showCenter": True, "showRadius": True, "radiusAngle": 30,
                "labels": labels,
                "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}
            }]
        }
    }


def create_sector_viz(radius=None, angle=None):
    """Create a circle sector with central angle marked."""
    r_label = f"r = {radius}" if radius else "r"
    a_label = f"{angle}°" if angle else "θ"
    # Calculate second radius endpoint based on angle
    angle_rad = (int(angle) if angle else 60) * 3.14159 / 180
    end_x = 120 + 70 * math.cos(angle_rad)
    end_y = 100 - 70 * math.sin(angle_rad)
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 220,
            "shapes": [
                {"type": "circle", "cx": 120, "cy": 110, "r": 70,
                 "showCenter": True, "showRadius": False, "labels": {"center": "O"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                # First radius (horizontal)
                {"type": "line", "x1": 120, "y1": 110, "x2": 190, "y2": 110,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                # Second radius (at angle)
                {"type": "line", "x1": 120, "y1": 110, "x2": end_x, "y2": end_y,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                # Arc indication
                {"type": "angle", "vertex": [120, 110], "startAngle": 0, "endAngle": int(angle) if angle else 60,
                 "radius": 30, "label": a_label},
                # Labels
                {"type": "text", "x": 155, "y": 125, "text": r_label, "fontSize": 12},
                {"type": "text", "x": 120, "y": 200, "text": "sector", "fontSize": 11, "textAnchor": "middle"}
            ]
        }
    }


def create_inscribed_angle_viz(arc_angle=None):
    """Create inscribed angle visualization."""
    angle = int(arc_angle) // 2 if arc_angle else 70
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 220,
            "shapes": [
                {"type": "circle", "cx": 130, "cy": 110, "r": 75,
                 "showCenter": True, "showRadius": False, "labels": {"center": "O"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                # Inscribed angle (triangle)
                {"type": "polygon", "points": [[130, 35], [65, 160], [195, 160]],
                 "style": {"fill": "none", "stroke": "#dc2626", "strokeWidth": 2}},
                # Points on circle
                {"type": "point", "x": 130, "y": 35, "radius": 4, "style": {"fill": "#dc2626"}},
                {"type": "point", "x": 65, "y": 160, "radius": 4, "style": {"fill": "#1e3a5f"}},
                {"type": "point", "x": 195, "y": 160, "radius": 4, "style": {"fill": "#1e3a5f"}},
                # Labels
                {"type": "text", "x": 130, "y": 25, "text": "P", "fontSize": 12, "textAnchor": "middle"},
                {"type": "text", "x": 52, "y": 165, "text": "A", "fontSize": 12},
                {"type": "text", "x": 205, "y": 165, "text": "B", "fontSize": 12},
                {"type": "text", "x": 130, "y": 200, "text": f"arc = {arc_angle}°" if arc_angle else "arc", "fontSize": 11, "textAnchor": "middle"}
            ]
        }
    }


def create_tangent_circles_viz(external=True):
    """Create two tangent circles."""
    if external:
        return {
            "type": "geometry",
            "config": {
                "width": 300,
                "height": 180,
                "shapes": [
                    {"type": "circle", "cx": 90, "cy": 90, "r": 50,
                     "showCenter": True, "showRadius": False, "labels": {"center": "O₁"},
                     "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                    {"type": "circle", "cx": 200, "cy": 90, "r": 60,
                     "showCenter": True, "showRadius": False, "labels": {"center": "O₂"},
                     "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}},
                    {"type": "point", "x": 140, "y": 90, "radius": 4, "style": {"fill": "#dc2626"}},
                    {"type": "text", "x": 90, "y": 150, "text": "r₁", "fontSize": 12, "textAnchor": "middle"},
                    {"type": "text", "x": 200, "y": 160, "text": "r₂", "fontSize": 12, "textAnchor": "middle"}
                ]
            }
        }
    else:
        return create_circle_viz()


def create_chord_viz(chord_length=None, distance=None):
    """Create circle with chord and distance from center."""
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 220,
            "shapes": [
                {"type": "circle", "cx": 130, "cy": 110, "r": 70,
                 "showCenter": True, "showRadius": False, "labels": {"center": "O"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                # Chord (horizontal)
                {"type": "line", "x1": 70, "y1": 140, "x2": 190, "y2": 140,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                # Perpendicular from center to chord
                {"type": "line", "x1": 130, "y1": 110, "x2": 130, "y2": 140,
                 "dashed": True, "style": {"stroke": "#2563eb", "strokeWidth": 1.5}},
                # Right angle marker
                {"type": "rectangle", "x": 122, "y": 132, "width": 8, "height": 8,
                 "labels": {}, "style": {"fill": "none", "stroke": "#1e3a5f", "strokeWidth": 1}},
                # Labels
                {"type": "text", "x": 130, "y": 160, "text": f"chord = {chord_length}" if chord_length else "chord", "fontSize": 11, "textAnchor": "middle"},
                {"type": "text", "x": 145, "y": 125, "text": f"d = {distance}" if distance else "d", "fontSize": 11, "style": {"fill": "#2563eb"}}
            ]
        }
    }


def create_circle_in_square_viz(side=None):
    """Create circle inscribed in square."""
    s_label = str(side) if side else "s"
    return {
        "type": "geometry",
        "config": {
            "width": 240,
            "height": 220,
            "shapes": [
                {"type": "rectangle", "x": 40, "y": 30, "width": 140, "height": 140,
                 "labels": {"width": s_label}, "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}},
                {"type": "circle", "cx": 110, "cy": 100, "r": 70,
                 "showCenter": True, "showRadius": True, "radiusAngle": 0,
                 "labels": {"center": "O", "radius": "r"},
                 "style": {"fill": "#dbeafe", "stroke": "#2563eb"}}
            ]
        }
    }


def create_secant_tangent_viz():
    """Create secant and tangent from external point."""
    return {
        "type": "geometry",
        "config": {
            "width": 300,
            "height": 200,
            "shapes": [
                {"type": "circle", "cx": 160, "cy": 100, "r": 60,
                 "showCenter": True, "showRadius": False, "labels": {"center": "O"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                # External point
                {"type": "point", "x": 50, "y": 100, "radius": 4, "label": "P", "labelOffset": {"x": -15, "y": 0}},
                # Secant line
                {"type": "line", "x1": 50, "y1": 100, "x2": 220, "y2": 100,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                # Tangent line
                {"type": "line", "x1": 50, "y1": 100, "x2": 120, "y2": 45,
                 "style": {"stroke": "#2563eb", "strokeWidth": 2}},
                {"type": "point", "x": 120, "y": 45, "radius": 3, "style": {"fill": "#2563eb"}},
                {"type": "text", "x": 85, "y": 60, "text": "t", "fontSize": 12, "style": {"fill": "#2563eb"}}
            ]
        }
    }


def create_common_tangent_viz():
    """Create two circles with common external tangent."""
    return {
        "type": "geometry",
        "config": {
            "width": 320,
            "height": 180,
            "shapes": [
                {"type": "circle", "cx": 80, "cy": 110, "r": 40,
                 "showCenter": True, "showRadius": False, "labels": {"center": ""},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                {"type": "circle", "cx": 220, "cy": 90, "r": 55,
                 "showCenter": True, "showRadius": False, "labels": {"center": ""},
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}},
                # Common tangent line
                {"type": "line", "x1": 50, "y1": 70, "x2": 270, "y2": 35,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                {"type": "text", "x": 80, "y": 160, "text": "r₁", "fontSize": 12, "textAnchor": "middle"},
                {"type": "text", "x": 220, "y": 155, "text": "r₂", "fontSize": 12, "textAnchor": "middle"}
            ]
        }
    }


# ============== TRIANGLES ==============

def create_right_triangle_viz(leg1=None, leg2=None, hyp=None, angle=None):
    """Create a right triangle with labels."""
    side_labels = [
        str(hyp) if hyp else "",
        str(leg1) if leg1 else "",
        str(leg2) if leg2 else ""
    ]
    shapes = [{
        "type": "triangle",
        "points": [[40, 160], [40, 50], [200, 160]],
        "labels": {"vertices": ["C", "A", "B"], "sides": side_labels},
        "showRightAngle": 0,
        "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}
    }]
    if angle:
        shapes.append({"type": "text", "x": 170, "y": 150, "text": f"{angle}°", "fontSize": 12})
    return {"type": "geometry", "config": {"width": 260, "height": 200, "shapes": shapes}}


def create_triangle_with_sides(a=None, b=None, c=None):
    """Create triangle with side lengths labeled."""
    return {
        "type": "geometry",
        "config": {
            "width": 290,
            "height": 200,
            "shapes": [{
                "type": "triangle",
                "points": [[145, 35], [40, 165], [250, 165]],
                "labels": {
                    "vertices": ["A", "B", "C"],
                    "sides": [str(a) if a else "", str(b) if b else "", str(c) if c else ""]
                },
                "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}
            }]
        }
    }


def create_triangle_with_angles(a1=None, a2=None, a3=None):
    """Create triangle with angles labeled."""
    shapes = [{
        "type": "triangle",
        "points": [[140, 35], [40, 165], [240, 165]],
        "labels": {"vertices": ["C", "A", "B"]},
        "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}
    }]
    if a1:
        shapes.append({"type": "angle", "vertex": [40, 165], "startAngle": 0, "endAngle": 50, "radius": 28, "label": str(a1)})
    if a2:
        shapes.append({"type": "angle", "vertex": [240, 165], "startAngle": 130, "endAngle": 180, "radius": 28, "label": str(a2)})
    if a3:
        shapes.append({"type": "text", "x": 140, "y": 62, "text": str(a3), "fontSize": 13})
    return {"type": "geometry", "config": {"width": 280, "height": 200, "shapes": shapes}}


def create_similar_triangles_viz():
    """Create similar triangles visualization."""
    return {
        "type": "geometry",
        "config": {
            "width": 320,
            "height": 200,
            "shapes": [
                {"type": "triangle", "points": [[160, 25], [40, 175], [280, 175]],
                 "labels": {"vertices": ["A", "B", "C"]},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                {"type": "triangle", "points": [[160, 95], [100, 175], [220, 175]],
                 "labels": {"vertices": ["D", "E", "F"]},
                 "style": {"fill": "#fef3c7", "stroke": "#dc2626", "strokeWidth": 2}}
            ]
        }
    }


def create_30_60_90_viz(short=None):
    """Create 30-60-90 triangle."""
    s = str(short) if short else "x"
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 200,
            "shapes": [
                {"type": "triangle", "points": [[40, 170], [40, 50], [220, 170]],
                 "labels": {"vertices": ["", "", ""], "sides": [f"2·{s}" if short else "2x", s, f"{s}√3" if short else "x√3"]},
                 "showRightAngle": 0,
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}},
                {"type": "text", "x": 28, "y": 110, "text": "60°", "fontSize": 11},
                {"type": "text", "x": 185, "y": 165, "text": "30°", "fontSize": 11}
            ]
        }
    }


def create_45_45_90_viz(leg=None):
    """Create 45-45-90 triangle."""
    s = str(leg) if leg else "x"
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 200,
            "shapes": [
                {"type": "triangle", "points": [[40, 170], [40, 40], [170, 170]],
                 "labels": {"vertices": ["", "", ""], "sides": [f"{s}√2" if leg else "x√2", s, s]},
                 "showRightAngle": 0,
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}},
                {"type": "text", "x": 55, "y": 55, "text": "45°", "fontSize": 11},
                {"type": "text", "x": 145, "y": 165, "text": "45°", "fontSize": 11}
            ]
        }
    }


def create_trig_triangle_viz(angle=None):
    """Create triangle for trig problems."""
    shapes = [
        {"type": "triangle", "points": [[40, 160], [40, 40], [200, 160]],
         "labels": {"vertices": ["", "", ""], "sides": ["hyp", "opp", "adj"]},
         "showRightAngle": 0,
         "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}}
    ]
    if angle:
        shapes.append({"type": "text", "x": 165, "y": 150, "text": f"θ = {angle}°", "fontSize": 12})
    else:
        shapes.append({"type": "text", "x": 170, "y": 150, "text": "θ", "fontSize": 14})
    return {"type": "geometry", "config": {"width": 260, "height": 200, "shapes": shapes}}


def create_triangle_area_viz(base=None, height=None):
    """Create triangle with base and height."""
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 200,
            "shapes": [
                {"type": "triangle", "points": [[120, 30], [30, 165], [250, 165]],
                 "labels": {"vertices": ["", "", ""]},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                {"type": "line", "x1": 120, "y1": 30, "x2": 120, "y2": 165,
                 "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
                {"type": "text", "x": 132, "y": 100, "text": f"h={height}" if height else "h", "fontSize": 12, "style": {"fill": "#dc2626"}},
                {"type": "text", "x": 140, "y": 182, "text": f"b={base}" if base else "b", "fontSize": 12}
            ]
        }
    }


def create_coordinate_triangle_viz(points=None):
    """Create triangle on coordinate plane."""
    return {
        "type": "graph",
        "config": {
            "width": 280,
            "height": 260,
            "xRange": [-1, 8],
            "yRange": [-1, 7],
            "gridLines": True,
            "elements": [
                {"type": "line", "points": [[0, 0], [6, 0]], "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "points": [[6, 0], [3, 4]], "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "points": [[3, 4], [0, 0]], "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "point", "coordinates": [0, 0], "label": "A"},
                {"type": "point", "coordinates": [6, 0], "label": "B"},
                {"type": "point", "coordinates": [3, 4], "label": "C"}
            ]
        }
    }


# ============== OTHER SHAPES ==============

def create_hexagon_viz(side=None, show_center=False):
    """Create regular hexagon visualization."""
    s_label = f"side = {side}" if side else "s"
    # Regular hexagon vertices (centered at 130, 100)
    cx, cy, r = 130, 100, 65
    points = []
    for i in range(6):
        angle = i * 60 * 3.14159 / 180
        points.append([cx + r * math.cos(angle), cy - r * math.sin(angle)])

    shapes = [
        {"type": "polygon", "points": points, "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}}
    ]
    if show_center:
        shapes.append({"type": "point", "x": cx, "y": cy, "radius": 3, "style": {"fill": "#1e3a5f"}})
        shapes.append({"type": "line", "x1": cx, "y1": cy, "x2": points[0][0], "y2": points[0][1],
                      "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1.5}})
    shapes.append({"type": "text", "x": 130, "y": 185, "text": s_label, "fontSize": 12, "textAnchor": "middle"})

    return {"type": "geometry", "config": {"width": 260, "height": 200, "shapes": shapes}}


def create_rhombus_viz(d1=None, d2=None):
    """Create rhombus with diagonals."""
    d1_label = f"d₁ = {d1}" if d1 else "d₁"
    d2_label = f"d₂ = {d2}" if d2 else "d₂"
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 200,
            "shapes": [
                {"type": "polygon", "points": [[140, 20], [50, 100], [140, 180], [230, 100]],
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Diagonals
                {"type": "line", "x1": 140, "y1": 20, "x2": 140, "y2": 180,
                 "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
                {"type": "line", "x1": 50, "y1": 100, "x2": 230, "y2": 100,
                 "dashed": True, "style": {"stroke": "#2563eb", "strokeWidth": 1.5}},
                {"type": "text", "x": 150, "y": 100, "text": d1_label, "fontSize": 11, "style": {"fill": "#dc2626"}},
                {"type": "text", "x": 140, "y": 195, "text": d2_label, "fontSize": 11, "style": {"fill": "#2563eb"}, "textAnchor": "middle"}
            ]
        }
    }


def create_trapezoid_viz(b1=None, b2=None, h=None):
    """Create trapezoid with parallel bases and height."""
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 200,
            "shapes": [
                {"type": "polygon", "points": [[80, 50], [200, 50], [240, 150], [40, 150]],
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Height line
                {"type": "line", "x1": 140, "y1": 50, "x2": 140, "y2": 150,
                 "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
                # Labels
                {"type": "text", "x": 140, "y": 40, "text": f"b₁ = {b1}" if b1 else "b₁", "fontSize": 11, "textAnchor": "middle"},
                {"type": "text", "x": 140, "y": 170, "text": f"b₂ = {b2}" if b2 else "b₂", "fontSize": 11, "textAnchor": "middle"},
                {"type": "text", "x": 150, "y": 105, "text": f"h = {h}" if h else "h", "fontSize": 11, "style": {"fill": "#dc2626"}}
            ]
        }
    }


def create_rectangle_viz(length, width, l_label=None, w_label=None):
    """Create rectangle with dimensions."""
    l_label = l_label or str(length)
    w_label = w_label or str(width)
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 200,
            "shapes": [{
                "type": "rectangle",
                "x": 60, "y": 40,
                "width": 160, "height": 100,
                "labels": {"width": l_label, "height": w_label},
                "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}
            }]
        }
    }


def create_square_viz(side, label=None):
    """Create square with side length."""
    label = label or str(side)
    return {
        "type": "geometry",
        "config": {
            "width": 220,
            "height": 200,
            "shapes": [{
                "type": "rectangle",
                "x": 45, "y": 35,
                "width": 110, "height": 110,
                "labels": {"width": label, "height": label},
                "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}
            }]
        }
    }


def create_angle_elevation_viz(angle=None, distance=None):
    """Create angle of elevation problem visualization."""
    return {
        "type": "geometry",
        "config": {
            "width": 300,
            "height": 220,
            "shapes": [
                # Ground line
                {"type": "line", "x1": 30, "y1": 180, "x2": 270, "y2": 180,
                 "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                # Building
                {"type": "rectangle", "x": 200, "y": 40, "width": 40, "height": 140,
                 "labels": {}, "style": {"fill": "#e5e7eb", "stroke": "#1e3a5f"}},
                # Observer
                {"type": "point", "x": 60, "y": 180, "radius": 5, "style": {"fill": "#dc2626"}},
                # Line of sight
                {"type": "line", "x1": 60, "y1": 180, "x2": 220, "y2": 40,
                 "dashed": True, "style": {"stroke": "#2563eb", "strokeWidth": 1.5}},
                # Angle arc
                {"type": "angle", "vertex": [60, 180], "startAngle": 0, "endAngle": 60, "radius": 35,
                 "label": f"{angle}°" if angle else "θ"},
                # Distance label
                {"type": "text", "x": 130, "y": 195, "text": f"{distance} ft" if distance else "d", "fontSize": 11}
            ]
        }
    }


def create_parallel_lines_viz(angle=None):
    """Create parallel lines with transversal."""
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 180,
            "shapes": [
                {"type": "line", "x1": 30, "y1": 50, "x2": 250, "y2": 50, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "x1": 30, "y1": 130, "x2": 250, "y2": 130, "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "x1": 80, "y1": 20, "x2": 200, "y2": 160, "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                {"type": "text", "x": 260, "y": 53, "text": "l₁", "fontSize": 14},
                {"type": "text", "x": 260, "y": 133, "text": "l₂", "fontSize": 14}
            ] + ([{"type": "text", "x": 125, "y": 45, "text": f"{angle}°", "fontSize": 12}] if angle else [])
        }
    }


def create_ladder_viz(length=None, distance=None):
    """Create ladder against wall problem."""
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 220,
            "shapes": [
                # Wall
                {"type": "line", "x1": 200, "y1": 30, "x2": 200, "y2": 180,
                 "style": {"stroke": "#1e3a5f", "strokeWidth": 3}},
                # Ground
                {"type": "line", "x1": 40, "y1": 180, "x2": 220, "y2": 180,
                 "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                # Ladder
                {"type": "line", "x1": 80, "y1": 180, "x2": 200, "y2": 60,
                 "style": {"stroke": "#dc2626", "strokeWidth": 3}},
                # Right angle marker
                {"type": "rectangle", "x": 190, "y": 170, "width": 10, "height": 10,
                 "labels": {}, "style": {"fill": "none", "stroke": "#1e3a5f", "strokeWidth": 1}},
                # Labels
                {"type": "text", "x": 125, "y": 110, "text": f"{length} ft" if length else "ladder", "fontSize": 11, "style": {"fill": "#dc2626"}},
                {"type": "text", "x": 130, "y": 195, "text": f"{distance} ft" if distance else "d", "fontSize": 11}
            ]
        }
    }


# ============== MAIN LOGIC ==============

def extract_numbers(text):
    """Extract all numbers from text."""
    return re.findall(r'\d+(?:\.\d+)?', text)


def generate_visualization(question):
    """Generate appropriate visualization based on question content."""
    text = question["question_text"]
    text_lower = text.lower()
    skill = question.get("skill_name", "").lower()
    numbers = extract_numbers(text)

    # ===== 3D SHAPES (STEREOMETRIC) =====

    # Sphere
    if "sphere" in text_lower:
        radius = re.search(r'radius[^\d]*(\d+)', text_lower)
        return create_sphere_viz(radius.group(1) if radius else (numbers[0] if numbers else None))

    # Hemisphere
    if "hemisphere" in text_lower:
        radius = re.search(r'radius[^\d]*(\d+)', text_lower)
        return create_hemisphere_viz(radius.group(1) if radius else None)

    # Frustum
    if "frustum" in text_lower or "truncated" in text_lower:
        radii = re.findall(r'radi(?:us|i)[^\d]*(\d+)', text_lower)
        height = re.search(r'height[^\d]*(\d+)', text_lower)
        r1 = radii[0] if len(radii) > 0 else None
        r2 = radii[1] if len(radii) > 1 else None
        h = height.group(1) if height else None
        return create_frustum_viz(r1, r2, h)

    # Tetrahedron
    if "tetrahedron" in text_lower:
        edge = re.search(r'(?:edge|side)[^\d]*(\d+)', text_lower)
        return create_tetrahedron_viz(edge.group(1) if edge else None)

    # Pyramid
    if "pyramid" in text_lower:
        base = re.search(r'(?:base|side)[^\d]*(\d+)', text_lower)
        height = re.search(r'height[^\d]*(\d+)', text_lower)
        return create_pyramid_viz(base.group(1) if base else None, height.group(1) if height else None)

    # Cube (including diagonal problems)
    if "cube" in text_lower:
        side = re.search(r'(?:edge|side)[^\d]*(\d+)', text_lower)
        show_diag = "diagonal" in text_lower
        return create_cube_viz(side.group(1) if side else None, show_diagonal=show_diag)

    # Cylinder
    if "cylinder" in text_lower:
        radius = re.search(r'radius[^\d]*(\d+)', text_lower)
        height = re.search(r'height[^\d]*(\d+)', text_lower)
        return create_cylinder_viz(radius.group(1) if radius else None, height.group(1) if height else None)

    # Cone
    if "cone" in text_lower:
        radius = re.search(r'radius[^\d]*(\d+)', text_lower)
        height = re.search(r'height[^\d]*(\d+)', text_lower)
        slant = re.search(r'slant[^\d]*(\d+)', text_lower)
        return create_cone_viz(
            radius.group(1) if radius else None,
            height.group(1) if height else None,
            slant.group(1) if slant else None
        )

    # Rectangular prism
    if "rectangular prism" in text_lower or "prism" in text_lower:
        dims = re.findall(r'(\d+)\s*[×x]\s*(\d+)\s*[×x]\s*(\d+)', text_lower)
        if dims:
            return create_rectangular_prism_viz(dims[0][0], dims[0][1], dims[0][2])
        return create_rectangular_prism_viz()

    # ===== CIRCLES =====

    # Sector / arc length
    if "sector" in text_lower or "arc" in text_lower:
        radius = re.search(r'radius[^\d]*(\d+)', text_lower)
        angle = re.search(r'(\d+)°', text)
        return create_sector_viz(radius.group(1) if radius else None, angle.group(1) if angle else None)

    # Inscribed angle
    if "inscribed" in text_lower and "angle" in text_lower:
        arc = re.search(r'arc[^\d]*(\d+)', text_lower)
        return create_inscribed_angle_viz(arc.group(1) if arc else None)

    # Secant and tangent
    if "secant" in text_lower or ("tangent" in text_lower and "external" in text_lower):
        return create_secant_tangent_viz()

    # Common tangent (two circles)
    if "common" in text_lower and "tangent" in text_lower:
        return create_common_tangent_viz()

    # Tangent circles
    if "tangent" in text_lower and "circle" in text_lower:
        external = "external" in text_lower
        return create_tangent_circles_viz(external)

    # Chord
    if "chord" in text_lower:
        length = re.search(r'(?:chord|length)[^\d]*(\d+)', text_lower)
        dist = re.search(r'(?:distance|from)[^\d]*(\d+)', text_lower)
        return create_chord_viz(length.group(1) if length else None, dist.group(1) if dist else None)

    # Circle inscribed in square
    if ("inscribed" in text_lower or "circle" in text_lower) and "square" in text_lower:
        side = re.search(r'side[^\d]*(\d+)', text_lower)
        return create_circle_in_square_viz(side.group(1) if side else None)

    # General circle
    if "circle" in text_lower or "circumference" in text_lower:
        radius = re.search(r'radius[^\d]*(\d+)', text_lower)
        diameter = re.search(r'diameter[^\d]*(\d+)', text_lower)
        return create_circle_viz(radius.group(1) if radius else None, diameter.group(1) if diameter else None)

    # ===== TRIANGLES =====

    # Angle of elevation/depression
    if "elevation" in text_lower or "depression" in text_lower:
        angle = re.search(r'(\d+)°', text)
        dist = re.search(r'(\d+)\s*(?:feet|meters|ft|m)', text_lower)
        return create_angle_elevation_viz(angle.group(1) if angle else None, dist.group(1) if dist else None)

    # Ladder problem
    if "ladder" in text_lower:
        length = re.search(r'(\d+)\s*(?:feet|ft)', text_lower)
        dist = re.search(r'(\d+)\s*(?:feet|ft)?\s*(?:from|away)', text_lower)
        return create_ladder_viz(length.group(1) if length else None, dist.group(1) if dist else None)

    # Similar triangles
    if "similar" in text_lower and "triangle" in text_lower:
        return create_similar_triangles_viz()

    # 30-60-90 triangle
    if "30-60-90" in text_lower or ("30°" in text and "60°" in text):
        side = re.search(r'(?:side|opposite)[^\d]*(\d+)', text_lower)
        return create_30_60_90_viz(side.group(1) if side else None)

    # 45-45-90 triangle
    if "45-45-90" in text_lower or text_lower.count("45°") >= 2:
        leg = re.search(r'leg[^\d]*(\d+)', text_lower)
        return create_45_45_90_viz(leg.group(1) if leg else None)

    # Right triangle
    if "right triangle" in text_lower or "hypotenuse" in text_lower:
        legs = re.findall(r'(?:leg|side)[^\d]*(\d+)', text_lower)
        hyp = re.search(r'hypotenuse[^\d]*(\d+)', text_lower)
        angle = re.search(r'(\d+)°', text)
        return create_right_triangle_viz(
            legs[0] if len(legs) > 0 else None,
            legs[1] if len(legs) > 1 else None,
            hyp.group(1) if hyp else None,
            angle.group(1) if angle else None
        )

    # Trig functions
    if any(t in text_lower for t in ["sin(", "cos(", "tan(", "sine", "cosine", "tangent"]):
        angle = re.search(r'(\d+)°', text)
        return create_trig_triangle_viz(angle.group(1) if angle else None)

    # Triangle with coordinates
    if "vertices" in text_lower and any(c in text for c in ["(0,", "(1,", "(2,", "(3,", "(4,", "(5,", "(6,"]):
        return create_coordinate_triangle_viz()

    # Triangle with side lengths
    if "triangle" in text_lower:
        sides = re.findall(r'(?:AB|BC|CA|AC|side|=)\s*(\d+)', text, re.IGNORECASE)
        if len(sides) >= 3:
            return create_triangle_with_sides(sides[0], sides[1], sides[2])

        # Triangle with angles
        angles = re.findall(r'(\d+)°', text)
        if len(angles) >= 2:
            return create_triangle_with_angles(f"{angles[0]}°", f"{angles[1]}°", "?")
        elif len(angles) == 1:
            return create_triangle_with_angles(f"{angles[0]}°", None, "?")

        # Base and height
        base = re.search(r'base[^\d]*(\d+)', text_lower)
        height = re.search(r'height[^\d]*(\d+)', text_lower)
        if base or height:
            return create_triangle_area_viz(base.group(1) if base else None, height.group(1) if height else None)

        return create_triangle_with_angles()

    # ===== OTHER SHAPES =====

    # Hexagon
    if "hexagon" in text_lower:
        side = re.search(r'side[^\d]*(\d+)', text_lower)
        show_center = "center" in text_lower or "vertex" in text_lower
        return create_hexagon_viz(side.group(1) if side else None, show_center)

    # Rhombus
    if "rhombus" in text_lower:
        diags = re.findall(r'diagonal[^\d]*(\d+)', text_lower)
        d1 = diags[0] if len(diags) > 0 else None
        d2 = diags[1] if len(diags) > 1 else None
        return create_rhombus_viz(d1, d2)

    # Trapezoid
    if "trapezoid" in text_lower:
        bases = re.findall(r'base[^\d]*(\d+)', text_lower)
        height = re.search(r'height[^\d]*(\d+)', text_lower)
        return create_trapezoid_viz(
            bases[0] if len(bases) > 0 else None,
            bases[1] if len(bases) > 1 else None,
            height.group(1) if height else None
        )

    # Parallel lines
    if "parallel" in text_lower and "transversal" in text_lower:
        angle = re.search(r'(\d+)°', text)
        return create_parallel_lines_viz(angle.group(1) if angle else None)

    # Rectangle
    if "rectangle" in text_lower:
        length = re.search(r'length[^\d]*(\d+)', text_lower)
        width = re.search(r'width[^\d]*(\d+)', text_lower)
        if length and width:
            return create_rectangle_viz(int(length.group(1)), int(width.group(1)))
        return create_rectangle_viz(8, 5)

    # Square
    if "square" in text_lower:
        side = re.search(r'side[^\d]*(\d+)', text_lower)
        if side:
            return create_square_viz(int(side.group(1)))
        return create_square_viz(6)

    # Quadrilateral with coordinates
    if "quadrilateral" in text_lower and "vertices" in text_lower:
        return create_coordinate_triangle_viz()  # Similar visualization works

    # ===== FALLBACKS =====

    if "area" in skill or "volume" in skill:
        return create_rectangle_viz(8, 5)
    if "triangle" in skill:
        return create_triangle_with_angles()
    if "circle" in skill:
        return create_circle_viz()
    if "trigonometry" in skill:
        return create_trig_triangle_viz()

    return create_triangle_with_angles()


def main():
    data_path = Path(__file__).parent / "data" / "math" / "geometry.json"

    print(f"Reading {data_path}")
    with open(data_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    questions = data["questions"]
    print(f"Processing {len(questions)} questions...")

    for i, q in enumerate(questions):
        q["visualization"] = generate_visualization(q)
        if (i + 1) % 30 == 0:
            print(f"  Processed {i + 1} questions")

    print(f"Generated visualizations for all {len(questions)} questions")

    with open(data_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Updated {data_path}")


if __name__ == "__main__":
    main()
