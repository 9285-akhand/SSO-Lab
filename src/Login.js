import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import {getItem, setItem } from "./localStorage";
import { Checkbox, Form, Input } from "antd";
import CurrentLocation from "./currentLocation";
function Login() {
//   const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isTrue,setIsTrue]=useState(false);
  const newEmail="akhandverma01062003@gmail.com";

    const newPassword="12345";
  // const [count, setcount1] = useState(0);
  async function submitHandle(e) {
    e.preventDefault();
    if(newEmail===email && newPassword===password){
        setIsTrue(true);
    }
    try {
      
    
    } catch (e) {
      console.log(e);
    }
  }

 
  return (
    <>
      
     {!isTrue?  <div class="grid  bg-white mb-4 h-[605px]  justify-center  items-center ">
        
        <div class="flex  flex-col justify-center items-center mx-auto border-2 max-w-[600px] rounded-lg mt-11  border-green-400">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                class=""
                placeholder="email"
                onChange={e => setemail(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="password"
                onChange={e => setpassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 1,
              }}
            >
              <button
                class="bg-blue-700 rounded-md text-lg p-1 px-3 text-white hover:bg-blue-600 transition-all duration-200  "
                onClick={submitHandle}
              >
                Login
              </button>
            </Form.Item>
          </Form>
        
        </div>
      </div>:""}

      {isTrue ?<CurrentLocation/> :" "}
    </>
  );
}

export default Login;
