const getList = async (req, res) => {
  const users = await userService.getAll();
  res.render("admin/users/index", { users });
};

const getOne = async (req, res) => {};

const create = async (req, res) => {};

const update = async (req, res) => {};

const remove = async (req, res) => {};

const userController = {
  getList,
  getOne,
  create,
  update,
  remove,
};

module.exports = userController;
