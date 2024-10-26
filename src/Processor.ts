import {User} from "./User";

export class Processor {

    giveConsent(user: User): void {
        user.consentGiven = true
    }

    verifyConsent(user: User): boolean {
        return user.consentGiven === true
    }

    isConsentIGiven(user: User): boolean {
        return user.age >= 18;
    }

    consentGiven(user: User): boolean{
        return user.consentGiven = this.isConsentIGiven(user)
    }
    revokeConsent(user: User): void {
        user.consentGiven = false // Отозвать согласие
    }
}