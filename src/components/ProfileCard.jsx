import { Card, Col, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import "../styles/profileCard.scss";
import {
  DeleteFilled,
  EditOutlined,
  GlobalOutlined,
  HeartFilled,
  HeartOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const ProfileCard = ({ userDetails, onDelete, onEditSubmit }) => {
  const [showModal, setShowModal] = useState(false);
  const [editedDetails, setEditedDetails] = useState(userDetails);
  const [isLiked, setIsLiked] = useState(false);
  const handleDeleteClick = () => {
    onDelete(userDetails.id);
  };

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleEditCancel = () => {
    setShowModal(false);
    setEditedDetails(userDetails);
  };

  const handleEditSubmit = () => {
    onEditSubmit(editedDetails);
    setShowModal(false);
  };

  return (
    <Col xl={24 / 4} md={24 / 3} sm={24 / 2} xs={24}>
      <div className="card__wrap">
        <Card
          hoverable
          cover={
            <div className="card__profile">
              <img src={userDetails.image} alt={userDetails.username} />
            </div>
          }
          actions={[
            isLiked ? (
              <HeartFilled
                key="like"
                style={{ fontSize: "18px", color: "red" }}
                onClick={() => setIsLiked(!isLiked)}
              />
            ) : (
              <HeartOutlined
                key="like"
                style={{ fontSize: "18px", color: "red" }}
                onClick={() => setIsLiked(!isLiked)}
              />
            ),
            <EditOutlined
              key="edit"
              style={{
                fontSize: "18px",
                color: `${showModal ? "#1890ff" : ""}`,
              }}
              onClick={handleEditClick}
            />,
            <DeleteFilled
              key="delete"
              style={{ fontSize: "18px" }}
              onClick={handleDeleteClick}
            />,
          ]}
        >
          <div className="card__name">{userDetails.name}</div>
          <div className="card__icon-value">
            <div className="card__icon">
              <MailOutlined style={{ fontSize: "18px" }} />
            </div>
            <div className="card__value">{userDetails.email}</div>
          </div>
          <div className="card__icon-value">
            <div className="card__icon">
              <PhoneOutlined style={{ fontSize: "18px" }} />
            </div>
            <div className="card__value">{userDetails.phone}</div>
          </div>
          <div className="card__icon-value">
            <div className="card__icon">
              <GlobalOutlined style={{ fontSize: "18px" }} />
            </div>
            <div className="card__value">{userDetails.website}</div>
          </div>
        </Card>
      </div>
      <Modal
        visible={showModal}
        onOk={handleEditSubmit}
        onCancel={handleEditCancel}
      >
        <div className="modal-form">
          <Form>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Input
                defaultValue={userDetails.name}
                onChange={(e) =>
                  setEditedDetails({ ...editedDetails, name: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Input
                defaultValue={userDetails.email}
                onChange={(e) =>
                  setEditedDetails({ ...editedDetails, email: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Input
                defaultValue={userDetails.phone}
                onChange={(e) =>
                  setEditedDetails({ ...editedDetails, phone: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item
              label="Website"
              name="website"
              rules={[
                {
                  required: true,
                  message: "This field is required",
                },
              ]}
            >
              <Input
                defaultValue={userDetails.website}
                onChange={(e) =>
                  setEditedDetails({
                    ...editedDetails,
                    website: e.target.value,
                  })
                }
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </Col>
  );
};

export default ProfileCard;
