interface AppointmentProps {
    customer: string
    startsAt: Date
    endsAt: Date
}

export class Appointment {
    private propst : AppointmentProps


    get customer() {
        return this.propst.customer
    }

    get startsAt() {
        return this.propst.startsAt
    }
    get endsAt() {
        return this.propst.endsAt
    }

    constructor (props: AppointmentProps){
        this.propst = props
    }
}