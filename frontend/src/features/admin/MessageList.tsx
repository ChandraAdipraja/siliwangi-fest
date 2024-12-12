import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/Table";
import axios from "axios";
import { Button } from "../../components/ui/Button";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";

interface Message {
  _id: string;
  senderName: string;
  recipientName: string;
  major: string;
  year: string;
  title: string;
  message: string;
  timestamp: string;
}

export const MessageList = () => {
  const [message, setMessage] = useState<Message[]>([]);

  useEffect(() => {
    getMessages();
  }, []);

  const deleteMessage = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/messages/${id}`);
      getMessages();
    } catch (error) {
      console.log(error);
    }
  };

  const getMessages = async () => {
    const response = await axios.get("http://localhost:5000/messages");
    setMessage(response.data);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-y-5 p-4">
      <div className="flex justify-between items-center w-full px-20">
        <div className="items-center justify-center">
          <h1 className="text-center font-semibold text-2xl uppercase">
            Data Messages
          </h1>
        </div>
        <div className="items-center justify-center">
          <input
            type="search"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Your Name"
            required
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">No</TableHead>
            <TableHead className="text-center">Pengirim</TableHead>
            <TableHead className="text-center">Penerima</TableHead>
            <TableHead className="text-center">Jurusan Penerima</TableHead>
            <TableHead className="text-center">Angkatan penerima</TableHead>
            <TableHead className="text-center">Judul</TableHead>
            <TableHead className="text-center">Pesan</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {message.map((message, index) => (
            <TableRow key={message._id}>
              <TableCell className="text-center">{index + 1}</TableCell>
              <TableCell className="text-center">
                {message.senderName}
              </TableCell>
              <TableCell className="text-center">
                {message.recipientName}
              </TableCell>
              <TableCell className="text-center">{message.major}</TableCell>
              <TableCell className="text-center">{message.year}</TableCell>
              <TableCell className="text-center">{message.title}</TableCell>
              <TableCell className="text-center">{message.message}</TableCell>
              <TableCell className="text-center flex justify-center items-center gap-3">
                <Button variant={"default"} className="bg-blue-500 text-white">
                  <FiEdit />
                </Button>
                <Button
                  variant={"default"}
                  className="bg-red-500 text-white"
                  onClick={() => deleteMessage(message._id)}
                >
                  <MdOutlineDeleteOutline />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
