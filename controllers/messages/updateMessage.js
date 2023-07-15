const { Message } = require("../../models");

const updateMessage = async (req, res) => {
    const { user_id } = req.user;
    const { message } = req.body;
    const { id: message_id } = req.params;

    if (!message) {
        return res.status(400).json({ message: 'Message is required.' });
    }

    try {
        // Find existing message from the database
        const isExisting = await findUserByEmail(message_id);

        if (!isExisting) {
            return res.status(400).send("Message does not exist.");
        }

        if (isExisting.from !== user_id) {
            return res.status(403).send("You are not authorized.");
        }

        const [_, updatedRows] = await Message.update(
            { messages: message },
            {
                where: { id: isExisting.id },
                returning: true // Include the updated message object in the result
            }
        );

        if (updatedRows.length === 0) {
            return res.status(500).json({ success: false, message: 'Update not successful.' });
        }

        const updatedMessage = updatedRows[0]; // Retrieve the updated message object

        res.status(201).json({
            id: updatedMessage.id,
            message: updatedMessage.message,
            to: updatedMessage.to,
            from: updatedMessage.from,
        });
    } catch (error) {
        console.error('Error updating message:', error);
        return res.status(500).json({ success: false, message: 'An error occurred.' });
    }
};

const findUserByEmail = async (message_id) => {
    try {
        const message = await Message.findOne({
            where: {
                id: message_id
            }
        });

        if (!message) {
            return false;
        }

        return message;
    } catch (error) {
        console.error('Error finding message by ID:', error);
        throw error; // or return an appropriate response
    }
};

module.exports = updateMessage;
