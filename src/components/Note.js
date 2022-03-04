import ReactMarkdown from "react-markdown";
import { format } from "date-fns";

const Note = ({ note }) => {
  return (
    <article key={note.id}>
      <img
        src={note.author.avatar}
        alt={`${note.author.username} avatar`}
        height="50px"
      />{" "}
      {note.author.username} {format(note.createdAt, "MM Do YYYY")}{" "}
      {note.favoriteCount}
      <ReactMarkdown children={note.content} />
    </article>
  );
};

export default Note;
