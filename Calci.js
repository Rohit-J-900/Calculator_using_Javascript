  let CurrDisplay="0";
        let ResultDisplay=false;

        function before(value)
        {
            if (CurrDisplay === "0" || ResultDisplay) 
            {
                CurrDisplay = value;
            } 
            else
            {
                CurrDisplay += value;
            }

            ResultDisplay = false;
            UpdateDisplay();
        }

        function UpdateDisplay()
        {
            let input_tag=document.getElementById('input-tag');
            input_tag.textContent=CurrDisplay;
        }

        function CalculateResult() 
        {
            try {
                let result = eval(CurrDisplay);
                CurrDisplay += " = " + result.toString();
                UpdateDisplay();
            } 
            catch (error) 
            {
                CurrDisplay="0";
                UpdateDisplay();
                alert("Invalid Input");
            }
            resultDisplay = true;
        }

        function clearLastElement() 
        {
            CurrDisplay = CurrDisplay.slice(0, -1);
            if (CurrDisplay === "") 
            {
                CurrDisplay = "0";
            }
            UpdateDisplay();
        }

        function erase()
        {
            CurrDisplay="0";
            ResultDisplay=false;
            UpdateDisplay();
        }
