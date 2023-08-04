const calculatetemp = () => {
    const inputtemp = document.getElementById('temp').value;
    const tempselected = document.getElementById('temp_diff');
    const valuetemp = temp_diff.options[tempselected.selectedIndex].value;

   const celtofah = (cel) => {
    let fahrenheit = ((cel * 9/5)+32).toFixed(1);
    return fahrenheit;
   }
   const fahtocel = (fah) => {
    let celsius = ((fah - 32)*5/9).toFixed(1);
    return celsius;
   }
    if(valuetemp == 'cel')
    {
        document.getElementById("result").innerHTML = celtofah(inputtemp)+ "&#176; fahrenheit";
    }
    else
    {
        document.getElementById("result").innerHTML = fahtocel(inputtemp)+ "&#176; celsius";
    }
}