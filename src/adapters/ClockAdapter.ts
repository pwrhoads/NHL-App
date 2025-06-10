import type { Gamecenter } from "../types/api/GamecenterApi";
import type { Clock } from "../types/view/ClockType";


export async function adaptToClock (gamecenter: Gamecenter): Promise<Clock>{
    return {
            currentPeriod: gamecenter.periodDescriptor.number,
            timeRemaining: gamecenter.clock.timeRemaining,
            inIntermission: gamecenter.clock.inIntermission 
        };
}