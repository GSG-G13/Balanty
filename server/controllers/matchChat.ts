import { Request, Response } from 'express';
import {
  addMessageService,
  deleteMessageService,
  getAllMessagesService,
  getMessageByIdService,
  editMessageService,
} from '../services';

const addMessage = async (req: Request, res: Response) => {
  const { message, senderId, matchId } = req.body;

  const newMessage = await addMessageService({
    message,
    senderId,
    matchId,
  });

  res.status(201).json({
    status: 201,
    data: {
      message: 'Message added successfully',
      newMessage,
    },
  });
};

const getMessageById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const message = await getMessageByIdService(+id);

  res.status(200).json({
    status: 200,
    data: {
      message,
    },
  });
};

const getAllMessages = async (req: Request, res: Response) => {
  const messages = await getAllMessagesService();

  res.status(200).json({
    status: 200,
    data: {
      messages,
    },
  });
};

const deleteMessage = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteMessageService(+id);

  res.status(200).json({
    status: 200,
    data: {
      message: 'Message deleted successfully',
    },
  });
};

const editMessage = async (req: Request, res: Response) => {
  const { id, updatedMessage } = req.body;

  const newMessage = await editMessageService(id, updatedMessage);

  res.status(200).json({
    status: 200,
    data: {
      message: 'Message updated successfully',
      newMessage,
    },
  });
};

export {
  addMessage,
  getMessageById,
  getAllMessages,
  deleteMessage,
  editMessage,
};