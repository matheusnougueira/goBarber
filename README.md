# API goBarber

Projeto em desenvolvimento, utilizando as tecnologias:

<li>
  <ul>NodeJS,</ul>
  <ul>TypeScript.</ul>
</li>

Sistema para agendamento de horários em barberias.

#### Agendar um horário

<strong>POST</strong>
<code>
{
	"provider": "Matheus Nougueira",
	"date": "Timestamp => ISO-8601"
}
</code>

#### Validando se já existe agendamento no horário selecionado

<code>
const findAppointmentsIsSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentsIsSameDate) {
      throw Error('This appointment is already booked');
    }
</code>


