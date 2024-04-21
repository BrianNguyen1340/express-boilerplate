/**
 * Updated by Brian Nguyen author on April 21 2024
 */

/** -------------------------------------------- */

export const slugify = (value) => {
  if (!value) return "";

  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/, "-")
    .replace(/-+/g, "-");
};

export const formatMoney = (amount) => {
  if (isNaN(amount)) {
    throw new Error("Invalid amount. Please provide a valid number.");
  }

  const formattedAmount = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  return formattedAmount + " VNĐ";
};
