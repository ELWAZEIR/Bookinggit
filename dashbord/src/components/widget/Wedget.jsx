import React from "react";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CurrencyYuanIcon from "@mui/icons-material/CurrencyYuan";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import useFetch from "../../hooks/useFetch";
export default function Wedget({ type, fetchUrl }) {
  const { data } = useFetch(`http://localhost:9000/api/${fetchUrl}`);
  console.log(data);

  return (
    <>
      <div className=" container-fluid  col-md-6 col-sm-6 col-lg-4">
        <div className=" ">
          <div className="   border border-1 border-secondary rounded p-2">
            <div className="row">
              <div className="col-8 ">
                <div className="">
                  <div className="card-body">
                    <h5 className="card-title text-muted">{type}</h5>
                    <p className="card-text fs-3 text-muted">
                      count : {data.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
