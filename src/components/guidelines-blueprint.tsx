// Decorative technical drawing behind the Design Guidelines banner, drawn as red
// line art on a transparent background.
//
// It is oversized and cropped on purpose: only the top of the part fits in the
// banner. There is no lettering of any kind (no dimensions, labels, tables or
// callouts), only the drawing itself: a front view of a spur gear and, to its
// right, the matching section view.
//
// The geometry is real so it holds up to someone who reads drawings. The gear is
// module 2.5 with 26 teeth and a 20° pressure angle, and everything follows from
// those three numbers:
//   pitch diameter   = module x teeth        = 65
//   outside diameter = pitch dia + 2 modules = 70
//   root diameter    = pitch dia - 2.5 mod.  = 58.75
// The tooth flanks are true involutes off the base circle, and the two views
// line up with each other feature for feature.
//
// Line conventions follow normal drafting practice:
// - visible outlines thick, everything else thin (about 2:1)
// - centerlines and the pitch circle as chain (dash-dot) lines
// - in the section the teeth are left unhatched, with a solid root line and a
//   chain pitch line, as gear drawings are conventionally shown
//
// The canvas is 1160 x 300 and is anchored to the right edge of its box
// (xMaxYMid slice), so the right-hand side is what phones see.

type Pt = [number, number];

// ---- The part, in millimetres ----
const MODULE = 2.5;
const TEETH = 26;
const PRESSURE_ANGLE = 20;
const PITCH_DIA = MODULE * TEETH; // 65
const OUTSIDE_DIA = PITCH_DIA + 2 * MODULE; // 70
const ROOT_DIA = PITCH_DIA - 2.5 * MODULE; // 58.75
const FACE_WIDTH = 6;
const RIM_BORE_DIA = 50; // where the rim steps down to the web
const WEB_THICKNESS = 3;
const HOLE_CIRCLE_DIA = 38; // lightening holes through the web
const HOLE_DIA = 9;
const TIP_CHAMFER = 0.5;
const WEB_FILLET = 1;

// ---- Canvas ----
const U = 620 / (OUTSIDE_DIA / 2); // canvas units per millimetre
const GX = 540; // gear centre, far below the visible canvas
const GY = 676;
const RA = (OUTSIDE_DIA / 2) * U;
const RP = (PITCH_DIA / 2) * U;
const RF = (ROOT_DIA / 2) * U;
const RB = RP * Math.cos((PRESSURE_ANGLE * Math.PI) / 180); // base circle
const R_RIM = (RIM_BORE_DIA / 2) * U;
const R_HOLES = (HOLE_CIRCLE_DIA / 2) * U;
const R_HOLE = (HOLE_DIA / 2) * U;

const rad = (deg: number) => (deg * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;
const P = (r: number, a: number): Pt => [GX + r * Math.cos(rad(a)), GY + r * Math.sin(rad(a))];
const f = ([x, y]: Pt) => `${x.toFixed(1)} ${y.toFixed(1)}`;
const n = (v: number) => v.toFixed(1);

// Involute function, and half the angle a tooth subtends at radius r.
const inv = (a: number) => Math.tan(a) - a;
const HALF_AT_BASE = deg(Math.PI / (2 * TEETH) + inv(rad(PRESSURE_ANGLE)));
const halfAngle = (r: number) => HALF_AT_BASE - deg(inv(Math.acos(RB / r)));

const PITCH_ANGLE = 360 / TEETH;
const FILLET = 0.3 * MODULE * U; // root fillet radius
const FILLET_ANGLE = deg(FILLET / RF);
const FLANK_STEPS = 10;
const FLANK_RADII = Array.from({ length: FLANK_STEPS + 1 }, (_, i) => RB + ((RA - RB) * i) / FLANK_STEPS);

// One tooth centred on angle `c`: root fillet, radial flank up to the base
// circle, involute to the tip, tip land, and the mirror image back down.
function toothPath(c: number) {
  const left = FLANK_RADII.map((r) => f(P(r, c - halfAngle(r))));
  const right = [...FLANK_RADII].reverse().map((r) => f(P(r, c + halfAngle(r))));
  return [
    `Q${f(P(RF, c - HALF_AT_BASE))} ${f(P(RF + FILLET, c - HALF_AT_BASE))}`,
    `L${left.join(" L")}`,
    `A${n(RA)} ${n(RA)} 0 0 1 ${right[0]}`,
    `L${right.slice(1).join(" L")}`,
    `L${f(P(RF + FILLET, c + HALF_AT_BASE))}`,
    `Q${f(P(RF, c + HALF_AT_BASE))} ${f(P(RF, c + HALF_AT_BASE + FILLET_ANGLE))}`,
  ].join(" ");
}

// Only the teeth that can appear in the banner are drawn (four either side of
// the top tooth), joined by arcs of the root circle.
function teethPath() {
  const centres = [-4, -3, -2, -1, 0, 1, 2, 3, 4].map((k) => -90 + k * PITCH_ANGLE);
  const d = [`M${f(P(RF, centres[0] - PITCH_ANGLE / 2))}`];
  for (const c of centres) {
    d.push(`A${n(RF)} ${n(RF)} 0 0 1 ${f(P(RF, c - HALF_AT_BASE - FILLET_ANGLE))}`, toothPath(c));
  }
  d.push(`A${n(RF)} ${n(RF)} 0 0 1 ${f(P(RF, centres[centres.length - 1] + PITCH_ANGLE / 2))}`);
  return d.join(" ");
}

const CENTER_DASH = "22 5 3 5";

// ---- Section view: the right-hand view, cut on the vertical centerline ----
const S0 = 1030; // left face
const S1 = S0 + FACE_WIDTH * U; // right face
const SC = (S0 + S1) / 2;
const Y_TIP = GY - RA;
const Y_PITCH = GY - RP;
const Y_ROOT = GY - RF;
const Y_RIM = GY - R_RIM;
const Y_HOLE = GY - (R_HOLES + R_HOLE); // top of the lightening hole
const CH = TIP_CHAMFER * U;
const FR = WEB_FILLET * U;
const W0 = SC - (WEB_THICKNESS / 2) * U;
const W1 = SC + (WEB_THICKNESS / 2) * U;

// Tooth, shown unsectioned.
const sectionTooth = `M${n(S0)} ${n(Y_ROOT)} V${n(Y_TIP + CH)} L${n(S0 + CH)} ${n(Y_TIP)} H${n(S1 - CH)} L${n(S1)} ${n(Y_TIP + CH)} V${n(Y_ROOT)}`;
// Rim and the top of the web, sectioned (hatched), down to the lightening hole.
const sectionBody = [
  `M${n(S0)} ${n(Y_ROOT)} H${n(S1)} V${n(Y_RIM)} H${n(W1 + FR)}`,
  `A${n(FR)} ${n(FR)} 0 0 0 ${n(W1)} ${n(Y_RIM + FR)} V${n(Y_HOLE)} H${n(W0)} V${n(Y_RIM + FR)}`,
  `A${n(FR)} ${n(FR)} 0 0 0 ${n(W0 - FR)} ${n(Y_RIM)} H${n(S0)} Z`,
].join(" ");

export function GuidelinesBlueprint({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1160 300"
      preserveAspectRatio="xMaxYMid slice"
      className={`text-brand ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <defs>
        <pattern id="dg-hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="9" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>

      {/* ---- Front view ---- */}
      <g strokeWidth="2.4">
        <path d={teethPath()} />
        {/* step from the rim down to the web */}
        <circle cx={GX} cy={GY} r={n(R_RIM)} />
        {/* lightening holes through the web */}
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const [x, y] = P(R_HOLES, a - 90);
          return <circle key={a} cx={n(x)} cy={n(y)} r={n(R_HOLE)} />;
        })}
      </g>
      {/* pitch circle, hole circle and the vertical centerline */}
      <g strokeWidth="1" strokeDasharray={CENTER_DASH} opacity="0.8">
        <circle cx={GX} cy={GY} r={n(RP)} />
        <circle cx={GX} cy={GY} r={n(R_HOLES)} />
        <path d={`M${GX} ${n(Y_TIP - 26)} V300`} />
      </g>

      {/* ---- Section view ---- */}
      <g strokeWidth="2.4">
        <path d={sectionBody} fill="url(#dg-hatch)" />
        <path d={sectionTooth} />
        {/* faces of the web, seen across the lightening hole */}
        <path d={`M${n(W0)} ${n(Y_HOLE)} V300 M${n(W1)} ${n(Y_HOLE)} V300`} />
      </g>
      {/* pitch line through the tooth */}
      <path d={`M${n(S0 - 14)} ${n(Y_PITCH)} H${n(S1 + 14)}`} strokeWidth="1" strokeDasharray={CENTER_DASH} opacity="0.8" />
    </svg>
  );
}
