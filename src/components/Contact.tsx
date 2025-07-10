import React from "react";
import { Form, Input, Button, Row, Col, Image, message as AntMessage } from "antd";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const { name, email, message } = values;

    emailjs
      .send(
        "service_k4t41ck", 
        "template_96t8zjt", 
        {
          name,                
          email,
          message,
        },
        "LmaRZ82zSFMg93IDN"      
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          form.resetFields();
          AntMessage.success("Message sent successfully!");
        },
        (error) => {
          console.error("EmailJS error:", error);
          AntMessage.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <Row gutter={[16, 16]} style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
        {/* Left side illustration */}
        <Col xs={24} md={12}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#f3f4f6",
              padding: "1.5rem",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "200px",
            }}
          >
            <Image src="/contactus.svg" preview={false} />
          </motion.div>
        </Col>

        {/* Right side contact form */}
        <Col xs={24} md={12} style={{ padding: "50px" }}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1.5rem", textAlign: "center" }}>
              Contact Me
            </h2>
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { type: "email", required: true, message: "Enter a valid email" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: "Please enter a message" }]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary" block>
                  Send
                </Button>
              </Form.Item>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </motion.section>
  );
};

export default Contact;
