const BN_DIGITS = "০১২৩৪৫৬৭৮৯";

export const toBn = (v: number | string) =>
  String(v).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);

export const formatPrice = (n: number) =>
  `${toBn(n.toLocaleString("en-US"))} টাকা`;

export const formatPct = (n: number) => toBn(Math.abs(n).toFixed(1));

export const UNIT_LABEL: Record<string, string> = {
  kg: "প্রতি কেজি",
  litre: "প্রতি লিটার",
  dozen: "প্রতি ডজন",
  piece: "প্রতি পিস",
};

export const UNIT_SHORT: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

export const banglaToday = () =>
  new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const bnToNum = (v: number | string) =>
  typeof v === "number"
    ? v
    : parseFloat(
        String(v)
          .replace(/[০-৯]/g, (d) => String("০১২৩৪৫৬৭৮৯".indexOf(d)))
          .replace(/[,\s]/g, ""),
      ) || 0;

export const banglaShortDate = () =>
  new Date().toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
