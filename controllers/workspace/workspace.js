// const workspace = require('../../models/workspace');
const { Workspace } = require("./../../models");

//It create workspace in databases
const createWorkspace = async (req, res) => {
  try {
    const { name } = req.body;
    res.status(200).send(name);
    const isExist = await isExistWorkSpace(name);
    if (isExist) {
      res.status(501).send("is Exist");
    } else {
      const status = await saveWorkSpaceName(name);
      if (status) res.status(200).send(status);
      else res.status(500).send("error to save data");
    }
  } catch (error) {
    console.error("Error to save workspace in db", error);
    throw error; // or return an appropriate response
  }
};

const saveWorkSpaceName = async (name) => {
  const isSave = await Workspace.create({
    name: name,
  });
  if (isSave == null) return false;
  else return true;
};

const isExistWorkSpace = async (name) => {
  try {
    const isFind = await Workspace.findOne({
      where: {
        name: name,
      },
    });
    console.log(`is find `,isFind);
    if (isFind == null) {
      return false;
    } else return true;
  } catch (error) {
    console.error("Error finding workspace by name:", error);
    throw error; // or return an appropriate response
  }
};

const editWorkspace = async (req, res) => {
  const workspaces = await Workspace.findAll();
  console.log(workspaces);
  res.status(200).send(`Update Workspace ${workspaces}`);
};

module.exports = { createWorkspace, editWorkspace };
