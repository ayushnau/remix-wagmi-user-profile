import React from "react";
import { Activity } from "../types/user";
import { Card, Col, Row } from "react-bootstrap";
import "../styles/UserActivities.css";

interface UserActivitiesTypes {
  activities: Activity[];
}

const UserActivities: React.FC<UserActivitiesTypes> = ({ activities }) => {
  return (
    <div className="container p-4">
      <h2 className="mb-4">Recent Activities</h2>
      <div className="overflow-auto">
        <Row className="g-4">
          {activities.map((activity: Activity, index: any) => (
            <Col
              key={index}
              xs={12}
              lg={6}
              className="d-flex align-items-stretch"
            >
              <Card className="shadow-sm border-0 rounded-3 h-100 activity-card">
                <Card.Body>
                  <Card.Title className="fs-5 fw-bold text-primary">
                    {activity.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {activity.date}
                  </Card.Subtitle>
                  <Card.Text className="text-secondary">
                    {activity.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default UserActivities;
