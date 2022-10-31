function mascara_telefone()
        {
           //limitador
         var tel = document.getElementsByClassName("TELEFONE_IMPUT")[0].value
            console.log(tel)
          tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementsByClassName("TELEFONE_IMPUT")[0].value=tel
        
           
            //máscara
            var tel_formatado = document.getElementsByClassName("TELEFONE_IMPUT")[0].value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementsByClassName("TELEFONE_IMPUT")[0].value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementsByClassName("TELEFONE_IMPUT")[0].value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementsByClassName("TELEFONE_IMPUT")[0].value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }



function mascara_CEP()
        {
           //limitador
         var tel = document.getElementsByClassName("CEP_IMPUT")[0].value
            console.log(tel)
          tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementsByClassName("CEP_IMPUT")[0].value=tel
        
           
            //máscara
            var tel_formatado = document.getElementsByClassName("CEP_IMPUT")[0].value
            if (tel_formatado[0]!=".")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementsByClassName("CEP_IMPUT")[0].value="."+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementsByClassName("CEP_IMPUT")[0].value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementsByClassName("CEP_IMPUT")[0].value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }