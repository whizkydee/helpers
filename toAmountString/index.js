const toAmountString = amtNumeric => {
        if(typeof amtNumeric !== 'number'){
            return ''
        }
  
        var numberText = String(amtNumeric);
        var parts = [];

        while(numberText.length >= 4){

                parts = (numberText.split(/(\d{3})$/)
                                        .reverse()
                                            .slice(1)
                                                .reverse())
                                                    .concat(parts);
                numberText = parts.shift();

        }

        parts.unshift(numberText);

        return parts.join(',');
}

export default toAmountString
