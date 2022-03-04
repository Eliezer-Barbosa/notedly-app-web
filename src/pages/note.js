import { useParams } from "react-router-dom";

const NotePage = () => {
  const { id } = useParams();
  return (
    <div>
      <p>ID: {id}</p>
    </div>
  );
};

export default NotePage;
