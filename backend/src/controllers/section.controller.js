const fetchAllSections = async (req, res) => {
  res.status(200).json({ msg: "Fetch All Sections" });
};

module.exports = {
  fetchAllSections,
};