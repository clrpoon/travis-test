import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const EquipWindow = ({ name, description, url }) => (
  <Modal
    size="tiny"
    closeIcon
    trigger={
      <Button
        data-testid="testItemField"
        style={{ boxShadow: "none" }}
        icon="question circle"
        size="tiny"
        circular
        basic
      />
    }
  >
    <Modal.Header data-testid="testName">{name}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src={url} />
      <Modal.Description>
        <Header>About</Header>
        <p data-testid="testDesc">{description}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default EquipWindow;
