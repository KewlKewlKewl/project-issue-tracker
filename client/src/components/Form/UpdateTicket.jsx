
import { useState, useEffect } from 'react'
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import './CreateTicket.scss'


const UpdateTicket = (props) => {
  const { ticketData, updateTicket, onClose, id } = props;
  

  const [ticket, setTicket] = useState({
    title: ticketData.title,
    description: ticketData.description,
    category: ticketData.category,
    end_date: ticketData.end_date,
    priority: ticketData.priority,
    plan_duration: ticketData.plan_duration,
    start_date: ticketData.start_date

    // team: ticketData.team
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedticket = {
      title: ticket.title,
      description: ticket.description,
      category: ticket.category,
      end_date: ticket.end_date,
      priority: ticket.priority,
      plan_duration: ticket.plan_duration,
      start_date: ticket.start_date
    }
    updateTicket(updatedticket, id)
    onClose()
  }

  const handleChange = (e) => { 
    setTicket({
      ...ticket,
      [e.target.name] : e.target.value
    })
  }

  
  return ( 
    <Container fluid>
      <Form className="ticket__form">
      <Label className="form__header">Update Ticket</Label>
        <FormGroup>
          <Label for="title" className="input-labels">Ticket Title</Label>
          <Input className="form-inputs" type="text" name="title" id="title" placeholder="Enter ticket title" bsSize="lg" onChange={handleChange} value={ticket.title} />
        </FormGroup>
        <FormGroup>
          <Label for="description" className="input-labels">Ticket Description</Label>
          <Input className="form-inputs"  type="textarea" name="description" id="description" rows="5" placeholder="Enter description" bsSize="lg" onChange={handleChange} value={ticket.description}/>
        </FormGroup>
        <div className="dual__input">
          <FormGroup className="input-select space">
            <Label for="category" className="input-labels">Category</Label>
            <Input className="form-inputs"  type="select" name="category" id="category" bsSize="lg" onChange={handleChange} value={ticket.category}>
            <option className="input-select">Issue</option>
            <option className="input-select">Bug</option>
            <option className="input-select">Feature Request</option>
          </Input>
        </FormGroup>
          <FormGroup className="input-select space">
            <Label for="priority" className="input-labels">Priority</Label>
            <Input className="form-inputs"  type="select" name="priority" id="priority" bsSize="lg" onChange={handleChange} value={ticket.priority}>
            <option className="input-select">High</option>
            <option className="input-select">Medium</option>
            <option className="input-select">Low</option>
          </Input>
        </FormGroup>
          {/* <FormGroup className="input-select">
            <Label for="status" className="input-labels">Status</Label>
            <Input className="form-inputs"  type="select" name="status" id="status" bsSize="lg" value={status}>
            <option className="input-select">On Track</option>
            <option className="input-select">In Progress</option>
            <option className="input-select">At Risk</option>
          </Input>
        </FormGroup> */}
          
        </div>

        <div className="date__input">
          <FormGroup className="start__date">
            <Label for="start" className="input-labels">Start Date</Label>
            <Input className="form-inputs"  type="date" name="start_date" id="start" placeholder="date placeholder" bsSize="lg" onChange={handleChange} value={ticket.start_date}/>
          </FormGroup>
          <FormGroup>
            <Label for="end_date" className="input-labels">End Date</Label>
            <Input className="form-inputs"  type="date" name="end_date" id="end_date" placeholder="date placeholder" bsSize="lg" onChange={handleChange} value={ticket.end_date}/>
          </FormGroup>
        </div>

        <div className="dual__input">
        <FormGroup className="input-select spaces">
          <Label for="team" className="input-labels">Update Team Members</Label>
          <Input className="form-inputs"  type="select" name="team" id="team" multiple bsSize="lg" value={ticket.team}>
            <option className="input-select">Fred Flinstone</option>
            <option className="input-select">Barney Rubble</option>
            <option className="input-select">Aman Hundal</option>
            <option className="input-select">Matt Freeman</option>
            <option className="input-select">Lateef Azeez</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="plan_duration" className="input-labels">Time Estimate (hours)</Label>
          <Input className="form-inputs" type="text" name="plan_duration" id="plan_duration" placeholder="Enter estimated hours" bsSize="lg" onChange={handleChange} value={ticket.plan_duration} />
        </FormGroup>
        </div>
        <FormGroup className="button-container">
          <Button className="submit_btn" onClick={handleSubmit}>Submit</Button>
        </FormGroup>
       
      </Form>
    </Container>
   );
}
 
export default UpdateTicket;