// Material lists shared by more than one page, so they can't drift apart.

// CNC metal groupings, shown on the Materials page and on the 5-Axis CNC
// Machining design guidelines. These lists are awaiting client confirmation,
// and one more composite still needs to be added to the Composites card.
export const cncMetals = [
  {
    name: "Non-Ferrous",
    items: ["Aluminums", "Brass", "Coppers", "Titaniums", "Nickel-based alloys"],
  },
  { name: "Ferrous", items: ["Stainless steels", "Alloy steels"] },
  { name: "Composites", items: ["Hydlar"] },
];
