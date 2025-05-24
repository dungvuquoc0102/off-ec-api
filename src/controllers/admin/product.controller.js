const getList = async (req, res) => {
  res.render("admin/product/products");
};
const getOne = async (req, res) => {};
const create = async (req, res) => {};
const update = async (req, res) => {};
const remove = async (req, res) => {};

const productController = {
  getList,
  getOne,
  create,
  update,
  remove,
};

module.exports = productController;
