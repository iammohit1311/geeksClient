import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import { Button } from "antd";
import axios from "axios";
import {
  SettingOutlined,
  userSwitchOutlined,
  LoadingOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import UserRoute from "../../components/routes/UserRoute";

const becomeInstructor = () => {
  //state
  const [loading, setLoading] = useState(false);
  const {
    state: { user },
  } = useContext(Context);

  const becomeInstructor = () => {
    //
    setLoading(true);
    axios
      .post("/api/make-instructor")
      .then((res) => {
        console.log(res);
        window.location.href = res.date;
      })
      .catch((err) => {
        console.log(err.response.status);
        toast("Stripe onboarding failed. Try again");
        setLoading(false);
      });
  };

  return (
    <>
      <h1 className="jumbotron text-center square">Become Instructor</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <div className="pt-4">
              <UserSwitchOutlined className="display-1 pb-3" />
              <br />
              <h2>Setup Payout to publish courses on Geeks Paradise</h2>
              <p className="lead text-warning">
                Geeks Paradise partners with Stripe to transfer earnings to your
                bank account
              </p>

              <a
                href="http://localhost:3000/stripe/callback"
                className="btn btn-primary"
              >
                Payout
              </a>

              {/* <Button
                className="mb-3"
                type="primary"
                block
                shape="round"
                icon={loading ? <LoadingOutlined /> : <SettingOutlined />}
                size="large"
                onClick={becomeInstructor}
                disabled={
                  (user && user.role && user.role.includes("Instructor")) ||
                  loading
                }
              >
                {loading ? "Processing..." : "Payout Setup"}
              </Button> */}

              <p className="lead">
                You will be redirected to Stripe to complete onboarding process
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default becomeInstructor;
