"""
Script to fix hard geometry question visualizations.
More precise pattern matching for challenging problems.
"""

import json
import re
import math
from pathlib import Path


# ============== 3D SHAPES ==============

def create_sphere_viz(volume=None, radius=None):
    """Create a sphere with 3D appearance."""
    if volume:
        label = f"V = {volume}π"
    elif radius:
        label = f"r = {radius}"
    else:
        label = "r"
    return {
        "type": "geometry",
        "config": {
            "width": 240,
            "height": 200,
            "shapes": [
                {"type": "circle", "cx": 120, "cy": 100, "r": 70,
                 "showCenter": True, "showRadius": True, "radiusAngle": 25,
                 "labels": {"center": "O", "radius": "r"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                {"type": "ellipse", "cx": 120, "cy": 100, "rx": 70, "ry": 18,
                 "style": {"fill": "none", "stroke": "#1e3a5f", "strokeWidth": 1.5, "strokeDasharray": "5,3"}},
                {"type": "text", "x": 120, "y": 190, "text": label, "fontSize": 14, "textAnchor": "middle"}
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
                {"type": "circle", "cx": 130, "cy": 140, "r": 70,
                 "showCenter": False, "showRadius": False,
                 "labels": {},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "rectangle", "x": 55, "y": 140, "width": 150, "height": 60,
                 "labels": {}, "style": {"fill": "white", "stroke": "white"}},
                {"type": "ellipse", "cx": 130, "cy": 140, "rx": 70, "ry": 18,
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
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
                {"type": "polygon", "points": [[70, 170], [190, 170], [220, 140], [100, 140]],
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "polygon", "points": [[130, 40], [70, 170], [190, 170]],
                 "style": {"fill": "#fde68a", "stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "polygon", "points": [[130, 40], [190, 170], [220, 140]],
                 "style": {"fill": "#fcd34d", "stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "x1": 130, "y1": 40, "x2": 100, "y2": 140,
                 "dashed": True, "style": {"stroke": "#6b7280", "strokeWidth": 1}},
                {"type": "line", "x1": 100, "y1": 140, "x2": 70, "y2": 170,
                 "dashed": True, "style": {"stroke": "#6b7280", "strokeWidth": 1}},
                {"type": "line", "x1": 130, "y1": 40, "x2": 130, "y2": 155,
                 "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
                {"type": "text", "x": 130, "y": 188, "text": b_label, "fontSize": 12, "textAnchor": "middle"},
                {"type": "text", "x": 140, "y": 100, "text": h_label, "fontSize": 12, "style": {"fill": "#dc2626"}}
            ]
        }
    }


def create_cone_viz(radius=None, height=None, slant=None):
    """Create a cone visualization with optional slant height."""
    shapes = [
        {"type": "polygon", "points": [[130, 30], [60, 170], [200, 170]],
         "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
        {"type": "ellipse", "cx": 130, "cy": 170, "rx": 70, "ry": 20,
         "style": {"fill": "#fde68a", "stroke": "#1e3a5f", "strokeWidth": 2}},
        {"type": "line", "x1": 130, "y1": 30, "x2": 130, "y2": 170,
         "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
        {"type": "line", "x1": 130, "y1": 170, "x2": 200, "y2": 170,
         "style": {"stroke": "#2563eb", "strokeWidth": 1.5}},
        {"type": "point", "x": 130, "y": 170, "radius": 3, "style": {"fill": "#1e3a5f"}},
    ]

    # Add radius label
    r_label = f"r = {radius}" if radius else "r"
    shapes.append({"type": "text", "x": 165, "y": 185, "text": r_label, "fontSize": 11, "style": {"fill": "#2563eb"}})

    # Add height label
    h_label = f"h = {height}" if height else "h"
    shapes.append({"type": "text", "x": 140, "y": 100, "text": h_label, "fontSize": 11, "style": {"fill": "#dc2626"}})

    # Add slant height if provided
    if slant:
        shapes.append({"type": "line", "x1": 130, "y1": 30, "x2": 200, "y2": 170,
                      "style": {"stroke": "#16a34a", "strokeWidth": 2}})
        shapes.append({"type": "text", "x": 175, "y": 95, "text": f"l = {slant}", "fontSize": 11, "style": {"fill": "#16a34a"}})

    return {"type": "geometry", "config": {"width": 260, "height": 210, "shapes": shapes}}


def create_frustum_viz(r1=None, r2=None, h=None):
    """Create frustum (truncated cone) visualization."""
    shapes = [
        # Side faces
        {"type": "polygon", "points": [[90, 50], [170, 50], [200, 160], [60, 160]],
         "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
        # Top ellipse
        {"type": "ellipse", "cx": 130, "cy": 50, "rx": 40, "ry": 12,
         "style": {"fill": "#fde68a", "stroke": "#1e3a5f", "strokeWidth": 2}},
        # Bottom ellipse
        {"type": "ellipse", "cx": 130, "cy": 160, "rx": 70, "ry": 18,
         "style": {"fill": "#fde68a", "stroke": "#1e3a5f", "strokeWidth": 2}},
        # Height line
        {"type": "line", "x1": 130, "y1": 50, "x2": 130, "y2": 160,
         "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
        # Radii
        {"type": "line", "x1": 130, "y1": 50, "x2": 170, "y2": 50,
         "style": {"stroke": "#2563eb", "strokeWidth": 1.5}},
        {"type": "line", "x1": 130, "y1": 160, "x2": 200, "y2": 160,
         "style": {"stroke": "#16a34a", "strokeWidth": 1.5}},
    ]

    # Labels
    r1_label = f"r₁ = {r1}" if r1 else "r₁"
    r2_label = f"r₂ = {r2}" if r2 else "r₂"
    h_label = f"h = {h}" if h else "h"
    shapes.append({"type": "text", "x": 152, "y": 42, "text": r1_label, "fontSize": 10, "style": {"fill": "#2563eb"}})
    shapes.append({"type": "text", "x": 165, "y": 178, "text": r2_label, "fontSize": 10, "style": {"fill": "#16a34a"}})
    shapes.append({"type": "text", "x": 140, "y": 110, "text": h_label, "fontSize": 11, "style": {"fill": "#dc2626"}})

    return {"type": "geometry", "config": {"width": 280, "height": 200, "shapes": shapes}}


def create_tetrahedron_viz(edge=None):
    """Create regular tetrahedron visualization."""
    e_label = f"edge = {edge}" if edge else "edge"
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 220,
            "shapes": [
                # Base triangle
                {"type": "polygon", "points": [[50, 180], [210, 180], [130, 130]],
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Front left face
                {"type": "polygon", "points": [[130, 40], [50, 180], [130, 130]],
                 "style": {"fill": "#fde68a", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Front right face
                {"type": "polygon", "points": [[130, 40], [130, 130], [210, 180]],
                 "style": {"fill": "#fcd34d", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Hidden edge
                {"type": "line", "x1": 130, "y1": 40, "x2": 130, "y2": 130,
                 "dashed": True, "style": {"stroke": "#6b7280", "strokeWidth": 1}},
                {"type": "text", "x": 130, "y": 200, "text": e_label, "fontSize": 12, "textAnchor": "middle"}
            ]
        }
    }


def create_cube_viz(side=None, show_diagonal=False):
    """Create cube visualization."""
    s_label = str(side) if side else "s"
    shapes = [
        # Front face
        {"type": "polygon", "points": [[50, 70], [150, 70], [150, 170], [50, 170]],
         "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
        # Top face
        {"type": "polygon", "points": [[50, 70], [100, 30], [200, 30], [150, 70]],
         "style": {"fill": "#fde68a", "stroke": "#1e3a5f", "strokeWidth": 2}},
        # Right face
        {"type": "polygon", "points": [[150, 70], [200, 30], [200, 130], [150, 170]],
         "style": {"fill": "#fcd34d", "stroke": "#1e3a5f", "strokeWidth": 2}},
        # Label
        {"type": "text", "x": 100, "y": 188, "text": s_label, "fontSize": 12, "textAnchor": "middle"}
    ]

    if show_diagonal:
        # Space diagonal
        shapes.append({"type": "line", "x1": 50, "y1": 170, "x2": 200, "y2": 30,
                      "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 2}})
        shapes.append({"type": "text", "x": 135, "y": 90, "text": "d", "fontSize": 12, "style": {"fill": "#dc2626"}})

    return {"type": "geometry", "config": {"width": 250, "height": 200, "shapes": shapes}}


def create_cylinder_inscribed_sphere_viz():
    """Create cylinder inscribed in sphere or sphere in cylinder."""
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 220,
            "shapes": [
                # Sphere outline
                {"type": "circle", "cx": 140, "cy": 110, "r": 80,
                 "showCenter": False, "showRadius": False,
                 "style": {"fill": "none", "stroke": "#2563eb", "strokeWidth": 2, "strokeDasharray": "5,3"}},
                # Cylinder body
                {"type": "polygon", "points": [[80, 50], [200, 50], [200, 170], [80, 170]],
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Top ellipse
                {"type": "ellipse", "cx": 140, "cy": 50, "rx": 60, "ry": 15,
                 "style": {"fill": "#fde68a", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Bottom ellipse
                {"type": "ellipse", "cx": 140, "cy": 170, "rx": 60, "ry": 15,
                 "style": {"fill": "#fde68a", "stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "text", "x": 140, "y": 205, "text": "cylinder in sphere", "fontSize": 11, "textAnchor": "middle"}
            ]
        }
    }


def create_drilled_sphere_viz():
    """Create sphere with cylindrical hole drilled through."""
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 220,
            "shapes": [
                # Sphere outline
                {"type": "circle", "cx": 140, "cy": 110, "r": 75,
                 "showCenter": True, "showRadius": False,
                 "labels": {"center": "O"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Equator ellipse
                {"type": "ellipse", "cx": 140, "cy": 110, "rx": 75, "ry": 20,
                 "style": {"fill": "none", "stroke": "#1e3a5f", "strokeWidth": 1.5, "strokeDasharray": "5,3"}},
                # Cylindrical hole (top)
                {"type": "ellipse", "cx": 140, "cy": 45, "rx": 25, "ry": 8,
                 "style": {"fill": "#f3f4f6", "stroke": "#dc2626", "strokeWidth": 1.5}},
                # Cylindrical hole (bottom)
                {"type": "ellipse", "cx": 140, "cy": 175, "rx": 25, "ry": 8,
                 "style": {"fill": "#f3f4f6", "stroke": "#dc2626", "strokeWidth": 1.5}},
                # Hole sides
                {"type": "line", "x1": 115, "y1": 45, "x2": 115, "y2": 175,
                 "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
                {"type": "line", "x1": 165, "y1": 45, "x2": 165, "y2": 175,
                 "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
                {"type": "text", "x": 140, "y": 205, "text": "sphere with hole", "fontSize": 11, "textAnchor": "middle"}
            ]
        }
    }


def create_cone_in_hemisphere_viz():
    """Create cone inscribed in hemisphere."""
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 200,
            "shapes": [
                # Hemisphere dome
                {"type": "circle", "cx": 140, "cy": 150, "r": 70,
                 "showCenter": False, "showRadius": False,
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Cover bottom half
                {"type": "rectangle", "x": 65, "y": 150, "width": 150, "height": 60,
                 "labels": {}, "style": {"fill": "white", "stroke": "white"}},
                # Base ellipse
                {"type": "ellipse", "cx": 140, "cy": 150, "rx": 70, "ry": 18,
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Cone
                {"type": "polygon", "points": [[140, 80], [70, 150], [210, 150]],
                 "style": {"fill": "rgba(254, 243, 199, 0.7)", "stroke": "#dc2626", "strokeWidth": 2}},
                {"type": "point", "x": 140, "y": 150, "radius": 3, "style": {"fill": "#1e3a5f"}},
                {"type": "text", "x": 140, "y": 185, "text": "cone in hemisphere", "fontSize": 11, "textAnchor": "middle"}
            ]
        }
    }


def create_sphere_in_cube_viz():
    """Create sphere inscribed in cube."""
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 220,
            "shapes": [
                # Cube - front face
                {"type": "polygon", "points": [[50, 70], [150, 70], [150, 170], [50, 170]],
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Top face
                {"type": "polygon", "points": [[50, 70], [100, 30], [200, 30], [150, 70]],
                 "style": {"fill": "#fde68a", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Right face
                {"type": "polygon", "points": [[150, 70], [200, 30], [200, 130], [150, 170]],
                 "style": {"fill": "#fcd34d", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Inscribed circle (representing sphere)
                {"type": "circle", "cx": 115, "cy": 115, "r": 45,
                 "showCenter": True, "showRadius": False,
                 "labels": {"center": ""},
                 "style": {"fill": "#dbeafe", "stroke": "#2563eb", "strokeWidth": 2, "strokeDasharray": "5,3"}},
                {"type": "text", "x": 130, "y": 200, "text": "sphere in cube", "fontSize": 11, "textAnchor": "middle"}
            ]
        }
    }


# ============== CIRCLES ==============

def create_concentric_circles_viz(inner_r=None, outer_r=None, label=None):
    """Create concentric circles (pool with walkway)."""
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 240,
            "shapes": [
                # Outer circle (walkway + pool)
                {"type": "circle", "cx": 140, "cy": 110, "r": 75,
                 "showCenter": False, "showRadius": False,
                 "style": {"fill": "#d1d5db", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Inner circle (pool)
                {"type": "circle", "cx": 140, "cy": 110, "r": 55,
                 "showCenter": True, "showRadius": False,
                 "labels": {"center": ""},
                 "style": {"fill": "#93c5fd", "stroke": "#1e3a5f", "strokeWidth": 2}},
                # Radius lines
                {"type": "line", "x1": 140, "y1": 110, "x2": 195, "y2": 110,
                 "style": {"stroke": "#2563eb", "strokeWidth": 1.5}},
                {"type": "line", "x1": 140, "y1": 110, "x2": 215, "y2": 110,
                 "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
                # Labels
                {"type": "text", "x": 165, "y": 100, "text": "r", "fontSize": 11, "style": {"fill": "#2563eb"}},
                {"type": "text", "x": 195, "y": 125, "text": "R", "fontSize": 11, "style": {"fill": "#dc2626"}},
                {"type": "text", "x": 140, "y": 210, "text": label or "pool + walkway", "fontSize": 11, "textAnchor": "middle"}
            ]
        }
    }


def create_sector_viz(radius=None, angle=None):
    """Create circle sector visualization."""
    angle_val = int(angle) if angle else 60
    angle_rad = angle_val * math.pi / 180

    # Calculate end point of arc
    cx, cy, r = 120, 110, 70
    end_x = cx + r * math.cos(-angle_rad)
    end_y = cy + r * math.sin(-angle_rad)

    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 220,
            "shapes": [
                {"type": "circle", "cx": cx, "cy": cy, "r": r,
                 "showCenter": True, "showRadius": False,
                 "labels": {"center": "O"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                {"type": "line", "x1": cx, "y1": cy, "x2": cx + r, "y2": cy,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                {"type": "line", "x1": cx, "y1": cy, "x2": end_x, "y2": end_y,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                {"type": "angle", "vertex": [cx, cy], "startAngle": 0, "endAngle": angle_val, "radius": 30,
                 "label": f"{angle_val}°" if angle else "θ"},
                {"type": "text", "x": 155, "y": 125, "text": "r", "fontSize": 12},
                {"type": "text", "x": 120, "y": 200, "text": "sector", "fontSize": 11, "textAnchor": "middle"}
            ]
        }
    }


def create_inscribed_angle_viz(arc=None):
    """Create inscribed angle in circle."""
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 220,
            "shapes": [
                {"type": "circle", "cx": 140, "cy": 110, "r": 70,
                 "showCenter": True, "showRadius": False,
                 "labels": {"center": "O"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                # Points on circle
                {"type": "point", "x": 210, "y": 110, "radius": 4, "label": "A", "labelOffset": {"x": 12, "y": 0}},
                {"type": "point", "x": 105, "y": 50, "radius": 4, "label": "B", "labelOffset": {"x": -5, "y": -12}},
                {"type": "point", "x": 80, "y": 150, "radius": 4, "label": "P", "labelOffset": {"x": -12, "y": 5}},
                # Inscribed angle sides
                {"type": "line", "x1": 80, "y1": 150, "x2": 210, "y2": 110,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                {"type": "line", "x1": 80, "y1": 150, "x2": 105, "y2": 50,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                # Arc label
                {"type": "text", "x": 180, "y": 60, "text": f"arc = {arc}°" if arc else "arc", "fontSize": 11},
                {"type": "text", "x": 100, "y": 165, "text": "inscribed", "fontSize": 10}
            ]
        }
    }


def create_tangent_from_point_viz():
    """Create tangent lines from external point."""
    return {
        "type": "geometry",
        "config": {
            "width": 300,
            "height": 200,
            "shapes": [
                {"type": "circle", "cx": 160, "cy": 100, "r": 55,
                 "showCenter": True, "showRadius": True, "radiusAngle": 0,
                 "labels": {"center": "O", "radius": "r = 5"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                # External point
                {"type": "point", "x": 50, "y": 100, "radius": 4, "label": "P", "labelOffset": {"x": -15, "y": 0}},
                # Tangent lines
                {"type": "line", "x1": 50, "y1": 100, "x2": 120, "y2": 55,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                {"type": "line", "x1": 50, "y1": 100, "x2": 120, "y2": 145,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                # Tangent points
                {"type": "point", "x": 120, "y": 55, "radius": 3, "label": "T₁", "labelOffset": {"x": 10, "y": -5}},
                {"type": "point", "x": 120, "y": 145, "radius": 3, "label": "T₂", "labelOffset": {"x": 10, "y": 10}},
                # Distance line
                {"type": "line", "x1": 50, "y1": 100, "x2": 160, "y2": 100,
                 "dashed": True, "style": {"stroke": "#6b7280", "strokeWidth": 1}},
                {"type": "text", "x": 85, "y": 70, "text": "12", "fontSize": 11, "style": {"fill": "#dc2626"}}
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
                     "showCenter": True, "showRadius": True, "radiusAngle": 180,
                     "labels": {"center": "O₁", "radius": "r₁"},
                     "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                    {"type": "circle", "cx": 200, "cy": 90, "r": 60,
                     "showCenter": True, "showRadius": True, "radiusAngle": 0,
                     "labels": {"center": "O₂", "radius": "r₂"},
                     "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}},
                    {"type": "point", "x": 140, "y": 90, "radius": 4, "label": "T",
                     "style": {"fill": "#dc2626"}}
                ]
            }
        }
    else:
        return {
            "type": "geometry",
            "config": {
                "width": 280,
                "height": 200,
                "shapes": [
                    {"type": "circle", "cx": 140, "cy": 100, "r": 70,
                     "showCenter": True, "showRadius": False,
                     "labels": {"center": "O₁"},
                     "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                    {"type": "circle", "cx": 165, "cy": 100, "r": 40,
                     "showCenter": True, "showRadius": False,
                     "labels": {"center": "O₂"},
                     "style": {"fill": "#fef3c7", "stroke": "#dc2626"}}
                ]
            }
        }


def create_chord_viz(chord_length=None, distance=None):
    """Create circle with chord and distance from center."""
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 220,
            "shapes": [
                {"type": "circle", "cx": 140, "cy": 110, "r": 70,
                 "showCenter": True, "showRadius": False,
                 "labels": {"center": "O"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                # Chord
                {"type": "line", "x1": 80, "y1": 140, "x2": 200, "y2": 140,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                # Perpendicular from center to chord
                {"type": "line", "x1": 140, "y1": 110, "x2": 140, "y2": 140,
                 "dashed": True, "style": {"stroke": "#2563eb", "strokeWidth": 1.5}},
                # Labels
                {"type": "text", "x": 140, "y": 160, "text": f"chord = {chord_length}" if chord_length else "chord",
                 "fontSize": 11, "textAnchor": "middle"},
                {"type": "text", "x": 150, "y": 128, "text": f"d = {distance}" if distance else "d",
                 "fontSize": 11, "style": {"fill": "#2563eb"}},
                # Chord endpoints
                {"type": "point", "x": 80, "y": 140, "radius": 3},
                {"type": "point", "x": 200, "y": 140, "radius": 3}
            ]
        }
    }


def create_circle_in_square_viz(side=None):
    """Create circle inscribed in square."""
    return {
        "type": "geometry",
        "config": {
            "width": 240,
            "height": 220,
            "shapes": [
                {"type": "rectangle", "x": 40, "y": 30, "width": 140, "height": 140,
                 "labels": {"width": f"s = {side}" if side else "s"},
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}},
                {"type": "circle", "cx": 110, "cy": 100, "r": 70,
                 "showCenter": True, "showRadius": False,
                 "labels": {"center": ""},
                 "style": {"fill": "#dbeafe", "stroke": "#2563eb", "strokeWidth": 2}}
            ]
        }
    }


def create_common_tangent_viz():
    """Create common external tangent of two circles."""
    return {
        "type": "geometry",
        "config": {
            "width": 320,
            "height": 180,
            "shapes": [
                {"type": "circle", "cx": 80, "cy": 100, "r": 40,
                 "showCenter": True, "showRadius": True, "radiusAngle": 180,
                 "labels": {"center": "O₁", "radius": "3"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                {"type": "circle", "cx": 220, "cy": 100, "r": 55,
                 "showCenter": True, "showRadius": True, "radiusAngle": 0,
                 "labels": {"center": "O₂", "radius": "5"},
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}},
                # Common tangent line
                {"type": "line", "x1": 60, "y1": 62, "x2": 200, "y2": 47,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                {"type": "text", "x": 140, "y": 40, "text": "tangent", "fontSize": 11, "style": {"fill": "#dc2626"}}
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
                {"type": "circle", "cx": 170, "cy": 100, "r": 60,
                 "showCenter": True, "showRadius": False,
                 "labels": {"center": "O"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                # External point
                {"type": "point", "x": 50, "y": 100, "radius": 4, "label": "P", "labelOffset": {"x": -15, "y": 0}},
                # Secant line
                {"type": "line", "x1": 50, "y1": 100, "x2": 230, "y2": 100,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                # Tangent line
                {"type": "line", "x1": 50, "y1": 100, "x2": 130, "y2": 45,
                 "style": {"stroke": "#2563eb", "strokeWidth": 2}},
                # Intersection points
                {"type": "point", "x": 110, "y": 100, "radius": 3},
                {"type": "point", "x": 230, "y": 100, "radius": 3},
                {"type": "point", "x": 130, "y": 45, "radius": 3, "style": {"fill": "#2563eb"}},
                # Labels
                {"type": "text", "x": 80, "y": 90, "text": "4", "fontSize": 11},
                {"type": "text", "x": 170, "y": 90, "text": "5", "fontSize": 11},
                {"type": "text", "x": 80, "y": 60, "text": "t", "fontSize": 11, "style": {"fill": "#2563eb"}}
            ]
        }
    }


def create_two_intersecting_circles_viz():
    """Create two intersecting circles with common chord."""
    return {
        "type": "geometry",
        "config": {
            "width": 300,
            "height": 200,
            "shapes": [
                {"type": "circle", "cx": 110, "cy": 100, "r": 60,
                 "showCenter": True, "showRadius": True, "radiusAngle": 180,
                 "labels": {"center": "O₁", "radius": "5"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                {"type": "circle", "cx": 190, "cy": 100, "r": 70,
                 "showCenter": True, "showRadius": True, "radiusAngle": 0,
                 "labels": {"center": "O₂", "radius": "12"},
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}},
                # Common chord (approximate)
                {"type": "line", "x1": 145, "y1": 45, "x2": 145, "y2": 155,
                 "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                {"type": "text", "x": 155, "y": 100, "text": "chord", "fontSize": 11, "style": {"fill": "#dc2626"}}
            ]
        }
    }


def create_circle_passes_through_viz():
    """Create circle passing through three points."""
    return {
        "type": "graph",
        "config": {
            "width": 280,
            "height": 260,
            "xRange": [-1, 9],
            "yRange": [-1, 10],
            "gridLines": True,
            "elements": [
                {"type": "point", "coordinates": [0, 0], "label": "(0, 0)"},
                {"type": "point", "coordinates": [6, 0], "label": "(6, 0)"},
                {"type": "point", "coordinates": [0, 8], "label": "(0, 8)"},
                {"type": "circle", "center": [3, 4], "radius": 5, "style": {"stroke": "#2563eb", "strokeDasharray": "5,3"}}
            ]
        }
    }


# ============== TRIANGLES ==============

def create_triangle_with_medians_viz():
    """Create triangle showing medians and centroid."""
    # Triangle vertices
    A = [140, 30]
    B = [40, 170]
    C = [240, 170]
    # Midpoints
    mBC = [(B[0] + C[0]) / 2, (B[1] + C[1]) / 2]
    mAC = [(A[0] + C[0]) / 2, (A[1] + C[1]) / 2]
    mAB = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2]
    # Centroid
    G = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3]

    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 200,
            "shapes": [
                {"type": "triangle", "points": [A, B, C],
                 "labels": {"vertices": ["A", "B", "C"]},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                # Medians
                {"type": "line", "x1": A[0], "y1": A[1], "x2": mBC[0], "y2": mBC[1],
                 "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
                {"type": "line", "x1": B[0], "y1": B[1], "x2": mAC[0], "y2": mAC[1],
                 "dashed": True, "style": {"stroke": "#2563eb", "strokeWidth": 1.5}},
                {"type": "line", "x1": C[0], "y1": C[1], "x2": mAB[0], "y2": mAB[1],
                 "dashed": True, "style": {"stroke": "#16a34a", "strokeWidth": 1.5}},
                # Centroid
                {"type": "point", "x": G[0], "y": G[1], "radius": 5, "label": "G",
                 "labelOffset": {"x": 10, "y": 0}, "style": {"fill": "#dc2626"}},
                {"type": "text", "x": 140, "y": 195, "text": "centroid", "fontSize": 11, "textAnchor": "middle"}
            ]
        }
    }


def create_orthocenter_viz():
    """Create right triangle showing orthocenter at vertex."""
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 200,
            "shapes": [
                {"type": "triangle", "points": [[40, 160], [40, 40], [220, 160]],
                 "labels": {"vertices": ["C", "A", "B"]},
                 "showRightAngle": 0,
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                # Orthocenter at C
                {"type": "point", "x": 40, "y": 160, "radius": 6, "label": "H",
                 "labelOffset": {"x": -15, "y": 10}, "style": {"fill": "#dc2626"}},
                {"type": "text", "x": 140, "y": 190, "text": "orthocenter at right angle vertex", "fontSize": 10, "textAnchor": "middle"}
            ]
        }
    }


def create_angle_bisector_viz():
    """Create triangle with angle bisector."""
    return {
        "type": "geometry",
        "config": {
            "width": 300,
            "height": 200,
            "shapes": [
                {"type": "triangle", "points": [[50, 170], [150, 30], [250, 170]],
                 "labels": {"vertices": ["B", "A", "C"]},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                # Angle bisector from A to D on BC
                {"type": "line", "x1": 150, "y1": 30, "x2": 130, "y2": 170,
                 "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 2}},
                {"type": "point", "x": 130, "y": 170, "radius": 4, "label": "D",
                 "labelOffset": {"x": 0, "y": 15}},
                {"type": "text", "x": 80, "y": 185, "text": "BD", "fontSize": 11},
                {"type": "text", "x": 180, "y": 185, "text": "DC", "fontSize": 11}
            ]
        }
    }


def create_similar_triangles_viz():
    """Create two similar triangles."""
    return {
        "type": "geometry",
        "config": {
            "width": 320,
            "height": 200,
            "shapes": [
                # Larger triangle
                {"type": "triangle", "points": [[160, 25], [40, 175], [280, 175]],
                 "labels": {"vertices": ["A", "B", "C"]},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                # Smaller similar triangle
                {"type": "triangle", "points": [[160, 95], [100, 175], [220, 175]],
                 "labels": {"vertices": ["D", "E", "F"]},
                 "style": {"fill": "#fef3c7", "stroke": "#dc2626", "strokeWidth": 2}}
            ]
        }
    }


def create_right_triangle_viz(a=None, b=None, c=None, angle=None):
    """Create right triangle with optional measurements."""
    shapes = [
        {"type": "triangle", "points": [[40, 160], [40, 40], [200, 160]],
         "labels": {"vertices": ["C", "A", "B"]},
         "showRightAngle": 0,
         "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}}
    ]

    # Add side labels
    if a:
        shapes.append({"type": "text", "x": 25, "y": 100, "text": str(a), "fontSize": 12})
    if b:
        shapes.append({"type": "text", "x": 120, "y": 175, "text": str(b), "fontSize": 12})
    if c:
        shapes.append({"type": "text", "x": 130, "y": 90, "text": str(c), "fontSize": 12})

    return {"type": "geometry", "config": {"width": 260, "height": 200, "shapes": shapes}}


def create_law_of_cosines_viz(a=None, b=None, c=None):
    """Create triangle for law of cosines."""
    shapes = [
        {"type": "triangle", "points": [[140, 30], [40, 170], [260, 170]],
         "labels": {"vertices": ["C", "A", "B"]},
         "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}}
    ]

    if a:
        shapes.append({"type": "text", "x": 210, "y": 95, "text": f"a = {a}", "fontSize": 11})
    if b:
        shapes.append({"type": "text", "x": 80, "y": 95, "text": f"b = {b}", "fontSize": 11})
    if c:
        shapes.append({"type": "text", "x": 150, "y": 185, "text": f"c = {c}", "fontSize": 11})

    return {"type": "geometry", "config": {"width": 300, "height": 200, "shapes": shapes}}


def create_30_60_90_viz(opposite=None):
    """Create 30-60-90 triangle with labels."""
    opp = str(opposite) if opposite else "x"
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 200,
            "shapes": [
                {"type": "triangle", "points": [[40, 170], [40, 40], [200, 170]],
                 "labels": {"vertices": ["", "", ""], "sides": [f"2{opp}" if opposite else "2x", opp, f"{opp}√3" if opposite else "x√3"]},
                 "showRightAngle": 0,
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}},
                {"type": "text", "x": 55, "y": 55, "text": "60°", "fontSize": 11},
                {"type": "text", "x": 165, "y": 165, "text": "30°", "fontSize": 11}
            ]
        }
    }


def create_angle_elevation_viz(angle=None, distance=None):
    """Create angle of elevation problem."""
    return {
        "type": "geometry",
        "config": {
            "width": 300,
            "height": 220,
            "shapes": [
                # Ground
                {"type": "line", "x1": 30, "y1": 180, "x2": 270, "y2": 180,
                 "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                # Building
                {"type": "rectangle", "x": 200, "y": 40, "width": 40, "height": 140,
                 "labels": {}, "style": {"fill": "#d1d5db", "stroke": "#1e3a5f"}},
                # Observer
                {"type": "point", "x": 50, "y": 180, "radius": 5, "style": {"fill": "#dc2626"}},
                # Line of sight
                {"type": "line", "x1": 50, "y1": 180, "x2": 200, "y2": 40,
                 "dashed": True, "style": {"stroke": "#2563eb", "strokeWidth": 2}},
                # Angle arc
                {"type": "angle", "vertex": [50, 180], "startAngle": 0, "endAngle": int(angle) if angle else 45,
                 "radius": 35, "label": f"{angle}°" if angle else "θ"},
                # Distance label
                {"type": "text", "x": 130, "y": 195, "text": f"{distance} ft" if distance else "d", "fontSize": 11}
            ]
        }
    }


def create_ladder_viz(length=None, distance=None):
    """Create ladder leaning against wall."""
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 200,
            "shapes": [
                # Ground
                {"type": "line", "x1": 20, "y1": 170, "x2": 240, "y2": 170,
                 "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                # Wall
                {"type": "line", "x1": 200, "y1": 170, "x2": 200, "y2": 30,
                 "style": {"stroke": "#1e3a5f", "strokeWidth": 3}},
                # Ladder
                {"type": "line", "x1": 80, "y1": 170, "x2": 200, "y2": 50,
                 "style": {"stroke": "#dc2626", "strokeWidth": 3}},
                # Right angle marker at wall-ground
                {"type": "rectangle", "x": 190, "y": 160, "width": 10, "height": 10,
                 "labels": {}, "style": {"fill": "none", "stroke": "#1e3a5f"}},
                # Labels
                {"type": "text", "x": 125, "y": 100, "text": f"{length} ft" if length else "L", "fontSize": 12, "style": {"fill": "#dc2626"}},
                {"type": "text", "x": 130, "y": 185, "text": f"{distance} ft" if distance else "d", "fontSize": 11},
                {"type": "angle", "vertex": [80, 170], "startAngle": 0, "endAngle": 45, "radius": 25, "label": "θ"}
            ]
        }
    }


def create_coordinate_triangle_viz(vertices=None):
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
                {"type": "point", "coordinates": [0, 0], "label": "A(0,0)"},
                {"type": "point", "coordinates": [6, 0], "label": "B(6,0)"},
                {"type": "point", "coordinates": [3, 4], "label": "C(3,4)"}
            ]
        }
    }


def create_coordinate_quadrilateral_viz():
    """Create quadrilateral on coordinate plane."""
    return {
        "type": "graph",
        "config": {
            "width": 280,
            "height": 260,
            "xRange": [-1, 7],
            "yRange": [-1, 5],
            "gridLines": True,
            "elements": [
                {"type": "line", "points": [[0, 0], [4, 0]], "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "points": [[4, 0], [5, 3]], "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "points": [[5, 3], [1, 3]], "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "points": [[1, 3], [0, 0]], "style": {"stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "point", "coordinates": [0, 0], "label": "(0,0)"},
                {"type": "point", "coordinates": [4, 0], "label": "(4,0)"},
                {"type": "point", "coordinates": [5, 3], "label": "(5,3)"},
                {"type": "point", "coordinates": [1, 3], "label": "(1,3)"}
            ]
        }
    }


def create_trig_identity_viz(func=None, value=None):
    """Create right triangle for trig identity problems."""
    shapes = [
        {"type": "triangle", "points": [[40, 160], [40, 40], [200, 160]],
         "labels": {"vertices": ["", "", ""], "sides": ["hyp", "opp", "adj"]},
         "showRightAngle": 0,
         "style": {"fill": "#fef3c7", "stroke": "#1e3a5f"}}
    ]

    if func and value:
        shapes.append({"type": "text", "x": 180, "y": 145, "text": f"{func} = {value}", "fontSize": 12})

    return {"type": "geometry", "config": {"width": 260, "height": 200, "shapes": shapes}}


def create_triangle_heron_viz(a=None, b=None, c=None):
    """Create triangle for Heron's formula problems."""
    shapes = [
        {"type": "triangle", "points": [[150, 30], [30, 170], [270, 170]],
         "labels": {"vertices": ["", "", ""]},
         "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}}
    ]

    if a:
        shapes.append({"type": "text", "x": 220, "y": 95, "text": str(a), "fontSize": 12})
    if b:
        shapes.append({"type": "text", "x": 80, "y": 95, "text": str(b), "fontSize": 12})
    if c:
        shapes.append({"type": "text", "x": 150, "y": 185, "text": str(c), "fontSize": 12})

    return {"type": "geometry", "config": {"width": 300, "height": 200, "shapes": shapes}}


def create_sin_addition_viz():
    """Create visualization for sin/cos addition formulas."""
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 200,
            "shapes": [
                # Two right triangles
                {"type": "triangle", "points": [[40, 160], [40, 60], [140, 160]],
                 "labels": {"vertices": ["", "A", ""]},
                 "showRightAngle": 0,
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                {"type": "triangle", "points": [[160, 160], [160, 80], [240, 160]],
                 "labels": {"vertices": ["", "B", ""]},
                 "showRightAngle": 0,
                 "style": {"fill": "#fef3c7", "stroke": "#dc2626"}},
                {"type": "text", "x": 85, "y": 145, "text": "sin(A) = 3/5", "fontSize": 10},
                {"type": "text", "x": 195, "y": 145, "text": "cos(B) = 5/13", "fontSize": 10},
                {"type": "text", "x": 140, "y": 190, "text": "sin(A + B) = ?", "fontSize": 11, "textAnchor": "middle"}
            ]
        }
    }


# ============== OTHER SHAPES ==============

def create_hexagon_viz(side=None, show_radius=False):
    """Create regular hexagon."""
    cx, cy, r = 130, 100, 65
    points = []
    for i in range(6):
        angle = i * 60 * math.pi / 180
        points.append([cx + r * math.cos(angle), cy - r * math.sin(angle)])

    shapes = [
        {"type": "polygon", "points": points, "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}}
    ]

    if show_radius:
        shapes.append({"type": "point", "x": cx, "y": cy, "radius": 3, "label": "O", "style": {"fill": "#1e3a5f"}})
        shapes.append({"type": "line", "x1": cx, "y1": cy, "x2": points[0][0], "y2": points[0][1],
                      "style": {"stroke": "#dc2626", "strokeWidth": 1.5}})
        shapes.append({"type": "text", "x": (cx + points[0][0]) / 2 + 5, "y": (cy + points[0][1]) / 2 - 5,
                      "text": "r", "fontSize": 12, "style": {"fill": "#dc2626"}})

    s_label = f"side = {side}" if side else "s"
    shapes.append({"type": "text", "x": 130, "y": 185, "text": s_label, "fontSize": 12, "textAnchor": "middle"})

    return {"type": "geometry", "config": {"width": 260, "height": 200, "shapes": shapes}}


def create_rhombus_viz(d1=None, d2=None):
    """Create rhombus with diagonals."""
    return {
        "type": "geometry",
        "config": {
            "width": 280,
            "height": 200,
            "shapes": [
                {"type": "polygon", "points": [[140, 20], [50, 100], [140, 180], [230, 100]],
                 "style": {"fill": "#fef3c7", "stroke": "#1e3a5f", "strokeWidth": 2}},
                {"type": "line", "x1": 140, "y1": 20, "x2": 140, "y2": 180,
                 "dashed": True, "style": {"stroke": "#dc2626", "strokeWidth": 1.5}},
                {"type": "line", "x1": 50, "y1": 100, "x2": 230, "y2": 100,
                 "dashed": True, "style": {"stroke": "#2563eb", "strokeWidth": 1.5}},
                {"type": "text", "x": 150, "y": 100, "text": f"d₁ = {d1}" if d1 else "d₁", "fontSize": 11, "style": {"fill": "#dc2626"}},
                {"type": "text", "x": 140, "y": 195, "text": f"d₂ = {d2}" if d2 else "d₂", "fontSize": 11, "style": {"fill": "#2563eb"}, "textAnchor": "middle"}
            ]
        }
    }


def create_equilateral_in_circle_viz(side=None):
    """Create equilateral triangle inscribed in circle."""
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 220,
            "shapes": [
                {"type": "circle", "cx": 130, "cy": 110, "r": 70,
                 "showCenter": True, "showRadius": True, "radiusAngle": -90,
                 "labels": {"center": "O", "radius": "R"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                {"type": "triangle", "points": [[130, 40], [60, 165], [200, 165]],
                 "labels": {"vertices": ["", "", ""]},
                 "style": {"fill": "#fef3c7", "stroke": "#dc2626", "strokeWidth": 2}},
                {"type": "text", "x": 130, "y": 200, "text": f"side = {side}" if side else "side = s", "fontSize": 11, "textAnchor": "middle"}
            ]
        }
    }


def create_arc_length_viz(radius=None, angle=None):
    """Create visualization for arc length = rθ."""
    angle_val = int(angle) if angle else 2
    return {
        "type": "geometry",
        "config": {
            "width": 260,
            "height": 200,
            "shapes": [
                {"type": "circle", "cx": 130, "cy": 100, "r": 65,
                 "showCenter": True, "showRadius": True, "radiusAngle": 0,
                 "labels": {"center": "O", "radius": f"r = {radius}" if radius else "r"},
                 "style": {"fill": "#dbeafe", "stroke": "#1e3a5f"}},
                {"type": "angle", "vertex": [130, 100], "startAngle": 0, "endAngle": 57,
                 "radius": 30, "label": f"θ = {angle_val} rad" if angle else "θ rad"},
                {"type": "text", "x": 200, "y": 55, "text": "arc = rθ", "fontSize": 12, "style": {"fill": "#dc2626"}}
            ]
        }
    }


# ============== MAIN LOGIC ==============

def extract_numbers(text):
    """Extract numbers from text."""
    return re.findall(r'\d+', text)


def generate_hard_visualization(q_id, text, text_lower):
    """Generate visualization for hard questions specifically."""

    # GEO-H-001: Sphere volume
    if "sphere" in text_lower and "volume" in text_lower:
        vol_match = re.search(r'volume\s*(\d+)', text_lower)
        return create_sphere_viz(volume=vol_match.group(1) if vol_match else "288")

    # GEO-H-002: sin/cos in right triangle
    if "sin(" in text_lower and "cos(" in text_lower and "right triangle" in text_lower:
        sin_match = re.search(r'sin\([^)]+\)\s*=\s*(\d+/\d+)', text)
        return create_trig_identity_viz("sin", sin_match.group(1) if sin_match else "3/5")

    # GEO-H-003: Sector area
    if "sector" in text_lower and "area" in text_lower:
        angle_match = re.search(r'(\d+)°', text)
        return create_sector_viz(None, angle_match.group(1) if angle_match else "120")

    # GEO-H-004: Similar triangles
    if "similar" in text_lower and "triangle" in text_lower:
        return create_similar_triangles_viz()

    # GEO-H-005: tan in right triangle
    if "tan(" in text_lower and ("angle" in text_lower or "90°" in text):
        return create_trig_identity_viz("tan", "?")

    # GEO-H-006: Cone with slant height
    if "cone" in text_lower and "slant" in text_lower:
        r_match = re.search(r'radius\s*(\d+)', text_lower)
        s_match = re.search(r'slant\s*(?:height)?\s*(\d+)', text_lower)
        return create_cone_viz(r_match.group(1) if r_match else "3", None, s_match.group(1) if s_match else "5")

    # GEO-H-007: Inscribed angle
    if "inscribed" in text_lower and "angle" in text_lower:
        arc_match = re.search(r'arc\s*(?:of)?\s*(\d+)', text_lower)
        return create_inscribed_angle_viz(arc_match.group(1) if arc_match else "140")

    # GEO-H-008: Triangle type from sides (5, 12, 13)
    if "sides" in text_lower and "5" in text and "12" in text and "13" in text:
        return create_right_triangle_viz("5", "12", "13")

    # GEO-H-009: Angle of elevation
    if "elevation" in text_lower or "angle of" in text_lower:
        angle_match = re.search(r'(\d+)°', text)
        dist_match = re.search(r'(\d+)\s*(?:feet|ft|meters|m)', text_lower)
        return create_angle_elevation_viz(angle_match.group(1) if angle_match else "60", dist_match.group(1) if dist_match else "50")

    # GEO-H-010: Pool with walkway (concentric circles)
    if "pool" in text_lower and "walkway" in text_lower:
        return create_concentric_circles_viz(label="pool with walkway")

    # GEO-H-011: Medians and centroid
    if "median" in text_lower and "centroid" in text_lower:
        return create_triangle_with_medians_viz()

    # GEO-H-012: Tangent from external point
    if "tangent" in text_lower and "external" in text_lower and "point" in text_lower:
        return create_tangent_from_point_viz()

    # GEO-H-013: Pyramid
    if "pyramid" in text_lower and "square" in text_lower:
        base_match = re.search(r'side\s*(\d+)', text_lower)
        h_match = re.search(r'height\s*(\d+)', text_lower)
        return create_pyramid_viz(base_match.group(1) if base_match else "6", h_match.group(1) if h_match else "4")

    # GEO-H-014: cos to tan conversion
    if "cos(" in text_lower and "tan(" in text_lower and "=" in text:
        cos_match = re.search(r'cos\([^)]+\)\s*=\s*(\d+/\d+)', text)
        return create_trig_identity_viz("cos", cos_match.group(1) if cos_match else "5/13")

    # GEO-H-015: Angle bisector theorem
    if "angle bisector" in text_lower:
        return create_angle_bisector_viz()

    # GEO-H-016: Hexagon inscribed in circle
    if "hexagon" in text_lower and ("circle" in text_lower or "inscribed" in text_lower):
        side_match = re.search(r'radius\s*(\d+)', text_lower)
        return create_hexagon_viz(side_match.group(1) if side_match else "6", show_radius=True)

    # GEO-H-017: Hemisphere
    if "hemisphere" in text_lower:
        r_match = re.search(r'radius\s*(\d+)', text_lower)
        return create_hemisphere_viz(r_match.group(1) if r_match else "6")

    # GEO-H-018: Ladder problem
    if "ladder" in text_lower:
        l_match = re.search(r'(\d+)\s*(?:feet|ft)', text_lower)
        d_match = re.search(r'bottom\s*(?:is)?\s*(\d+)', text_lower) or re.search(r'(\d+)\s*(?:feet|ft)\s*from', text_lower)
        return create_ladder_viz(l_match.group(1) if l_match else "10", d_match.group(1) if d_match else "6")

    # GEO-H-019: Rhombus with diagonals
    if "rhombus" in text_lower and "diagonal" in text_lower:
        diags = re.findall(r'(\d+)', text)
        return create_rhombus_viz(diags[0] if len(diags) > 0 else "10", diags[1] if len(diags) > 1 else "24")

    # GEO-H-020, GEO-H-058: Circle in square
    if "circle" in text_lower and "inscribed" in text_lower and "square" in text_lower:
        side_match = re.search(r'side\s*(\d+)', text_lower)
        return create_circle_in_square_viz(side_match.group(1) if side_match else "10")

    # GEO-H-021, GEO-H-043: Frustum
    if "frustum" in text_lower:
        radii = re.findall(r'radi(?:us|i)\s*(\d+)', text_lower)
        h_match = re.search(r'height\s*(\d+)', text_lower)
        return create_frustum_viz(
            radii[0] if len(radii) > 0 else "3",
            radii[1] if len(radii) > 1 else "6",
            h_match.group(1) if h_match else "4"
        )

    # GEO-H-022: sin quadrant problem
    if "sin(" in text_lower and "quadrant" in text_lower:
        sin_match = re.search(r'sin\([^)]+\)\s*=\s*(\d+/\d+)', text)
        return create_trig_identity_viz("sin", sin_match.group(1) if sin_match else "4/5")

    # GEO-H-023: Triangle with vertices
    if "triangle" in text_lower and "vertices" in text_lower:
        return create_coordinate_triangle_viz()

    # GEO-H-024: Externally tangent circles
    if "tangent" in text_lower and "circle" in text_lower and ("radii" in text_lower or "radius" in text_lower):
        external = "external" in text_lower
        return create_tangent_circles_viz(external)

    # GEO-H-025: Cube diagonal
    if "cube" in text_lower and "diagonal" in text_lower:
        return create_cube_viz(None, show_diagonal=True)

    # GEO-H-026: Finding angle in right triangle
    if "angle" in text_lower and "right" in text_lower and "find" in text_lower:
        return create_right_triangle_viz()

    # GEO-H-027: Orthocenter
    if "orthocenter" in text_lower:
        return create_orthocenter_viz()

    # GEO-H-028: Arc length with radians
    if "arc" in text_lower and "radian" in text_lower:
        r_match = re.search(r'radius\s*(?:is)?\s*(\d+)', text_lower)
        angle_match = re.search(r'(\d+)\s*radian', text_lower)
        return create_arc_length_viz(r_match.group(1) if r_match else "5", angle_match.group(1) if angle_match else "2")

    # GEO-H-029: Cylinder inscribed in sphere
    if "cylinder" in text_lower and "inscribed" in text_lower and "sphere" in text_lower:
        return create_cylinder_inscribed_sphere_viz()

    # GEO-H-030: Two observers problem (elevation)
    if "observer" in text_lower and ("60°" in text or "45°" in text):
        return create_angle_elevation_viz("60", "100")

    # GEO-H-031: Cone in hemisphere
    if "cone" in text_lower and "hemisphere" in text_lower:
        return create_cone_in_hemisphere_viz()

    # GEO-H-032: Heron's formula (sides given)
    if "triangle" in text_lower and ("13" in text and "14" in text and "15" in text):
        return create_triangle_heron_viz("13", "14", "15")

    # GEO-H-033: sin(A + B)
    if "sin(" in text_lower and "cos(" in text_lower and ("a + b" in text_lower or "a+b" in text_lower):
        return create_sin_addition_viz()

    # GEO-H-034: Two intersecting circles
    if "circle" in text_lower and "intersect" in text_lower and "chord" in text_lower:
        return create_two_intersecting_circles_viz()

    # GEO-H-035: Sphere in cube
    if "sphere" in text_lower and "inscribed" in text_lower and "cube" in text_lower:
        return create_sphere_in_cube_viz()

    # GEO-H-036: Law of cosines
    if "triangle" in text_lower and "angle" in text_lower and "°" in text:
        a_match = re.search(r'AB\s*=\s*(\d+)', text)
        b_match = re.search(r'AC\s*=\s*(\d+)', text)
        return create_law_of_cosines_viz(
            a_match.group(1) if a_match else None,
            b_match.group(1) if b_match else None,
            None
        )

    # GEO-H-037: 30-60-90 given one side
    if "30°" in text and ("90°" in text or "angle c = 90" in text_lower):
        return create_30_60_90_viz()

    # GEO-H-038: Circle through three points
    if "circle" in text_lower and "passes through" in text_lower:
        return create_circle_passes_through_viz()

    # GEO-H-039: Sphere with cylindrical hole
    if "sphere" in text_lower and "hole" in text_lower and "drilled" in text_lower:
        return create_drilled_sphere_viz()

    # GEO-H-040: Centroid divides median
    if "centroid" in text_lower and "median" in text_lower and "ratio" in text_lower:
        return create_triangle_with_medians_viz()

    # GEO-H-041: tan to sin conversion
    if "tan(" in text_lower and "sin(" in text_lower:
        tan_match = re.search(r'tan\([^)]+\)\s*=\s*(\d+)', text)
        return create_trig_identity_viz("tan", tan_match.group(1) if tan_match else "2")

    # GEO-H-042: Chord distance from center
    if "chord" in text_lower and ("distance" in text_lower or "from" in text_lower):
        c_match = re.search(r'chord\s*(?:of)?\s*(?:length)?\s*(\d+)', text_lower)
        d_match = re.search(r'(\d+)\s*(?:unit|from)', text_lower)
        return create_chord_viz(c_match.group(1) if c_match else "8", d_match.group(1) if d_match else "3")

    # GEO-H-044: Triangle with coordinates
    if "triangle" in text_lower and ("(" in text and "," in text):
        return create_coordinate_triangle_viz()

    # GEO-H-045: Hexagon center to vertex
    if "hexagon" in text_lower and ("center" in text_lower or "vertex" in text_lower):
        side_match = re.search(r'side\s*(\d+)', text_lower)
        return create_hexagon_viz(side_match.group(1) if side_match else "6", show_radius=True)

    # GEO-H-046: Secant-tangent theorem
    if "secant" in text_lower and "tangent" in text_lower:
        return create_secant_tangent_viz()

    # GEO-H-047: Sphere and cylinder surface area relation
    if "sphere" in text_lower and "cylinder" in text_lower and "surface" in text_lower:
        return create_cylinder_inscribed_sphere_viz()

    # GEO-H-048: Altitude and median
    if "altitude" in text_lower and "median" in text_lower:
        return create_triangle_with_medians_viz()

    # GEO-H-049: sin(75°)
    if "sin(75" in text_lower or "sin 75" in text_lower:
        return create_sin_addition_viz()

    # GEO-H-050: Common external tangent
    if "common" in text_lower and "external" in text_lower and "tangent" in text_lower:
        return create_common_tangent_viz()

    # GEO-H-051: Tetrahedron
    if "tetrahedron" in text_lower:
        edge_match = re.search(r'(?:edge|length)\s*(\d+)', text_lower)
        return create_tetrahedron_viz(edge_match.group(1) if edge_match else "6")

    # GEO-H-052: Angle bisector of angle C
    if "bisector" in text_lower and "angle" in text_lower:
        return create_angle_bisector_viz()

    # GEO-H-053: Area formula (1/2)ab sin(C)
    if "area" in text_lower and "sin(" in text_lower and "(1/2)" in text:
        return create_law_of_cosines_viz("8", "10", None)

    # GEO-H-054: Equilateral triangle in circle
    if "equilateral" in text_lower and "inscribed" in text_lower:
        side_match = re.search(r'side\s*(?:is)?\s*(\d+)', text_lower)
        return create_equilateral_in_circle_viz(side_match.group(1) if side_match else "6")

    # GEO-H-055: Cone and cylinder equal volumes
    if "cone" in text_lower and "cylinder" in text_lower and "equal" in text_lower:
        return create_cone_viz("3", "?", None)

    # GEO-H-056: Orthocenter of right triangle
    if "orthocenter" in text_lower and "right" in text_lower:
        return create_orthocenter_viz()

    # GEO-H-057: Law of cosines
    if "law of cosines" in text_lower or ("cos(" in text_lower and "a =" in text_lower):
        sides = re.findall(r'[abc]\s*=\s*(\d+)', text)
        return create_law_of_cosines_viz(
            sides[0] if len(sides) > 0 else "7",
            sides[1] if len(sides) > 1 else "8",
            sides[2] if len(sides) > 2 else "9"
        )

    # GEO-H-059: Right cone surface area
    if "cone" in text_lower and "surface area" in text_lower:
        r_match = re.search(r'radius\s*(\d+)', text_lower)
        s_match = re.search(r'slant\s*(?:height)?\s*(\d+)', text_lower)
        return create_cone_viz(r_match.group(1) if r_match else "6", None, s_match.group(1) if s_match else "10")

    # GEO-H-060: Quadrilateral with vertices
    if "quadrilateral" in text_lower and "vertices" in text_lower:
        return create_coordinate_quadrilateral_viz()

    # Default for hard questions
    return None


def main():
    data_path = Path(__file__).parent / "data" / "math" / "geometry.json"

    print(f"Reading {data_path}")
    with open(data_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    questions = data["questions"]
    print(f"Processing {len(questions)} questions...")

    fixed_count = 0
    for q in questions:
        q_id = q["question_id"]
        text = q["question_text"]
        text_lower = text.lower()
        difficulty = q.get("difficulty", "")

        # Only process hard questions
        if difficulty == "hard":
            new_viz = generate_hard_visualization(q_id, text, text_lower)
            if new_viz:
                q["visualization"] = new_viz
                fixed_count += 1
                print(f"  Fixed: {q_id}")

    print(f"\nFixed {fixed_count} hard question visualizations")

    with open(data_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Updated {data_path}")


if __name__ == "__main__":
    main()
