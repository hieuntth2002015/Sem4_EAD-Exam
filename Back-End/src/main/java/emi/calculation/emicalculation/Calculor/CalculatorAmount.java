package emi.calculation.emicalculation.Calculor;

import emi.calculation.emicalculation.Entity.Amount;
import emi.calculation.emicalculation.Entity.AmountBeforeEndOfTenure;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("v1/amounts")
public class CalculatorAmount {
    @RequestMapping(path = "calculetorInterest", method = RequestMethod.POST)
    public ResponseEntity<Object> calculateRateOfInterest(@RequestBody Amount Amount) {
        double loanAmount =  Amount.getLoan();
        double rateOfInterest =  (Amount.getRate() / 100) / 12;
        double tenure =  Amount.getTenure();

        double mathPow = Math.pow((1 + rateOfInterest), tenure);

        double totalLoanAmountPerMonth = loanAmount
                * rateOfInterest
                * ((mathPow) / (mathPow - 1));

        return new ResponseEntity<>(totalLoanAmountPerMonth, HttpStatus.OK);
    }

    @RequestMapping(path = "calculateTotalAmountToBePaid", method = RequestMethod.POST)
    public ResponseEntity<Object> calculateTotalAmountToBePaidBeforeEndOfTenure(@RequestBody AmountBeforeEndOfTenure AmountBeforeEndOfTenure) {
        double AmountLeftToPay = AmountBeforeEndOfTenure.getLoan();
        double rateOfEarlySettleMent = AmountBeforeEndOfTenure.getRate() / 100;
        double totalAmountToPay = AmountLeftToPay * (1 + rateOfEarlySettleMent);

        return new ResponseEntity<>(totalAmountToPay, HttpStatus.OK);
    }

}
