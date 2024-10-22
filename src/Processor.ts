import {User} from "./User";

export class Processor {

    giveConsent(user: User): void {
        user.consentGiven = true
    }

    verifyConsent(user: User): boolean {
        return user.consentGiven === true
    }

    giveConsentIfAgeIsOk(user: User): boolean {
        if (user.age >= 18) {
            return user.consentGiven = true
        } else {
            return user.consentGiven = false
        }
    }

    revokeConsent(user: User): void {
        user.consentGiven = false // Отозвать согласие
    }
}