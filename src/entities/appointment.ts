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
        const { startsAt, endsAt } = props

        if( startsAt <= new Date()){
            throw new Error('Invalid start date')
        }

        if (endsAt <= startsAt){
            throw new Error('Invalid end date')
        }

        this.propst = props
    }
}