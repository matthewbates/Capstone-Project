import React, { useState, useEffect } from "react";
import { Col, Card, Image, Button } from "react-bootstrap";

function Packlist() {
  const [checklist, setChecklist] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  //   useEffect(() => {
  //     fetch("/checklist_gears")
  //       .then((response) => response.json())
  //       .then(checklist = > setChecklist(checklist));
  //   }, []);

  function handleChecked() {
    setIsChecked(!isChecked);
  }
  return (
    <Col>
      <Card style={{ width: "18rem" }}></Card>

      <Card style={{ width: "18rem" }}>
        <Card.Title>Backpacking Gear</Card.Title>
        {/* ENTER HREF FOR BACKPACKING SIZES AFTER MVP IS COMPLETE */}
        <Card.Subtitle>
          A backpack that hold between 30-55 liters is standard for
          overnight/weekend trips. If you'll be out for longer, consult this
          guide
        </Card.Subtitle>
        <div>
          <label>
            <input type="checkbox" /> Backpack (with raincover)
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Tent
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Sleeping Pad
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Headlamp (with extra batteries)
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Trekking Poles
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Tent Footprint (for extra floor
            protection)
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Camping Pillow
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> Bear Spray
          </label>
        </div>
      </Card>
    </Col>
  );
}

export default Packlist;

// each piece of gear is an instance
