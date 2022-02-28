package emi.calculation.emicalculation.Entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Amount {
    private double loan;
    private double rate;
    private double tenure;
}
