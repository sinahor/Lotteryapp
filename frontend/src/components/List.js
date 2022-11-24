import "./list.css";
export default function list(){
    return(
        <div className="list">
            <table className="list_table">
                <tr className="list_table_row1">
                    <th className="list_table_row1_clm1">Match</th>
                    <th className="list_table_row1_clm2">Number of Winners</th>
                    <th>Prize Pool</th>
                    <th className="list_table_row1_clm4">Winnings</th>
                </tr>
                <tr>
                    <td>5</td>
                    <td>1</td>
                    <td>AED 20,000,000.00</td>
                    <td><span>AED 20,000,000.00</span></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>37</td>
                    <td>AED 1,000,000.00</td>
                    <td><span>AED 27,027.02</span></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>1578</td>
                    <td>AED 350.00</td>
                    <td><span>AED 350.00</span></td>
                </tr>
            </table>
        </div>
    );
}