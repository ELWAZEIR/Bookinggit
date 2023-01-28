export const userColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "user",
    headerName: "user",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg d-flex align-items-center">
          <img
            className="cellImg rounded-5 me-3"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="ava"
            width={32}
            height={32}
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 140,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 300 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 120,
  },
  {
    field: "cheapestPrice",
    headerName: "Price",
    width: 100,
  },
];
export const roomColumns = [
  { field: "_id", headerName: "ID", width: 300 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];
