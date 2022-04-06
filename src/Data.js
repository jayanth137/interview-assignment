import { Avatar } from "@mui/material";
import MenuButton from "./components/MenuButton/MenuButton";

//Columbs
export const columns = [
  {
    field: "avatar",
    headerName: "PROFILE",
    type: "string",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <Avatar src={params.row.avatar} className="userListImg" alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "firstName",
    headerName: "FIRST NAME",
    width: 155,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "LAST NAME",
    width: 155,
    editable: true,
  },
  {
    field: "Mobile",
    headerName: "MOBILE",
    type: "string",
    width: 155,
    editable: true,
  },
  {
    field: "email",
    headerName: "EMAIL ADDRESS",
    type: "string",
    width: 155,
    editable: true,
  },
  {
    field: "CreditCard",
    headerName: "CREDIT CARD",
    type: "number",
    width: 155,
    editable: true,
  },
  {
    field: "Amount",
    headerName: "TOTAL SALES",
    type: "number",
    width: 155,
    editable: true,
  },
  {
    field: "LastOrder",
    headerName: "LAST ORDER",
    type: "number",
    width: 180,
    editable: true,
  },
  {
    field: "action",
    headerName: "",
    width: 70,
    renderCell: () => {
      return (
        <div className="userListUser">
          <MenuButton />
        </div>
      );
    },
  },
];

//rows
export const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    avatar:
      "https://images.pexels.com/photos/11621970/pexels-photo-11621970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    Mobile: "+1234567124",
    email: "jon@gmail.com",
    CreditCard: "**** **** 7981",
    Amount: "$130.00",
    LastOrder: "02/02/2022",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    avatar:
      "https://images.pexels.com/photos/11075296/pexels-photo-11075296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Mobile: "+1234567124",
    email: "jon@gmail.com",
    CreditCard: "**** **** 7981",
    Amount: "$130.00",
    LastOrder: "02/02/2022",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    avatar:
      "https://images.pexels.com/photos/5690229/pexels-photo-5690229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Mobile: "+1234567124",
    email: "jon@gmail.com",
    CreditCard: "**** **** 7981",
    Amount: "$130.00",
    LastOrder: "02/02/2022",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    avatar:
      "https://images.pexels.com/photos/11621973/pexels-photo-11621973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Mobile: "+1234567124",
    email: "jon@gmail.com",
    CreditCard: "**** **** 7981",
    Amount: "$130.00",
    LastOrder: "02/02/2022",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    avatar:
      "https://images.pexels.com/photos/11608114/pexels-photo-11608114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Mobile: "+1234567124",
    email: "jon@gmail.com",
    CreditCard: "**** **** 7981",
    Amount: "$130.00",
    LastOrder: "02/02/2022",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "fucker",
    avatar:
      "https://images.pexels.com/photos/4060367/pexels-photo-4060367.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Mobile: "+1234567124",
    email: "jon@gmail.com",
    CreditCard: "**** **** 7981",
    Amount: "$130.00",
    LastOrder: "02/02/2022",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    avatar:
      "https://images.pexels.com/photos/11608114/pexels-photo-11608114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Mobile: "+1234567124",
    email: "jon@gmail.com",
    CreditCard: "**** **** 7981",
    Amount: "$130.00",
    LastOrder: "02/02/2022",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    avatar:
      "https://images.pexels.com/photos/11621970/pexels-photo-11621970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",

    Mobile: "+1234567124",
    email: "jon@gmail.com",
    CreditCard: "**** **** 7981",
    Amount: "$130.00",
    LastOrder: "02/02/2022",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    avatar:
      "https://images.pexels.com/photos/11608114/pexels-photo-11608114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    Mobile: "+1234567124",
    email: "jon@gmail.com",
    CreditCard: "**** **** 7981",
    Amount: "$130.00",
    LastOrder: "02/02/2022",
  },
];

console.log(JSON.stringify());
