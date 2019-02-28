import { AbstractControl } from "@angular/forms";

export class CustomValidators {
    static power (control : AbstractControl) {
        const minPower = 0;
        const maxPower = 10000;
        if(control.value < minPower || control.value > maxPower) {
            return {
                value2: true
            }
        }
        return null
    }
}
// export class CustomValidators {
//     static power (mainGoal : number) {

//         return (control : AbstractControl) => {
//         if(control.value > mainGoal) {
//             return {
//                 value2: true
//             }
//         }
//     }
//         return null
//     }
// }