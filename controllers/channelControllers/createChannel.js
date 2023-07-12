const { Channel, Workspace, users } = require("../../models");

// create channel controller

const createChannel = async (req, res) => {
  try {
    const { name, workspaceid } = req.body;
    if (!name) {
      return res
        .status(400)
        .send({ success: false, message: "Name cannot be null." });
    }
    if (!workspaceid) {
      return res
        .status(400)
        .send({ success: false, message: "Workspace ID cannot be null." });
    }
    const channel = await Channel.create({
      channel_name: name,
      workspace_id: workspaceid,
    });
    return res.status(200).send({
      success: true,
      message: "Channel created successfully.",
      channel,
    });
  } catch (error) {
    console.error("Error creating channel:", error);
    return res
      .status(500)
      .send({ success: false, error: "Internal server error." });
  }
};

// getting the channel name and it's workspace name

const getWorkSpaceChannel = async (req, res) => {
  try {
    const workspaceId = req.params.id;
    console.log(workspaceId);
    const workspace = await Workspace.findOne({
      where: { id: workspaceId },
      include: {
        model: Channel,
        attributes: ["channel_name"],
      },
      attributes: ["name"],
    });
    return res.status(200).send({ success: true, workspace });
  } catch (error) {
    console.error("Error retrieving channels in workspace:", error);
    return res
      .status(500)
      .send({ success: false, error: "Internal server error." });
  }
};

// adding members in to channel

const registerUserInChannel = async (req, res) => {
  try {
    const { channelId, userId } = req.params;
    //console.log(userId, channelId);
    const channel = await Channel.findByPk(channelId);
    console.log(channel.channel_name);
  } catch (error) {
    console.error("Error retrieving channels in workspace:", error);
    return res
      .status(500)
      .send({ success: false, error: "Internal server error." });
  }
};

module.exports = { createChannel, getWorkSpaceChannel, registerUserInChannel };
