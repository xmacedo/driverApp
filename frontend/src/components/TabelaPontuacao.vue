<template>
    <div>
        <h4>Scoring Guide</h4>
        <table class="table table-striped table-hover">
            <tbody>
                <tr>
                    <th>DASS-21 Scoring</th>
                    <th>Depression</th>
                    <th>Anxiety</th>
                    <th>Stress</th>
                </tr>
                <tr>
                    <th>Normal</th>
                    <td>0-4</td>
                    <td>0-3</td>
                    <td>0-7</td>
                </tr>
                <tr>
                    <th>Mild</th>
                    <td>5-6</td>
                    <td>4-5</td>
                    <td>8-9</td>
                </tr>
                <tr>
                    <th>Moderate</th>
                    <td>7-10</td>
                    <td>6-7</td>
                    <td>10-12</td>
                </tr>
                <tr>
                    <th>Severe</th>
                    <td>11-13</td>
                    <td>8-9</td>
                    <td>13-16</td>
                </tr>
                <tr>
                    <th>Extremely Severe</th>
                    <td>14+</td>
                    <td>10+</td>
                    <td>17+</td>
                </tr>
            </tbody>
        </table>
        <h4></h4>
    </div>
</template>

<script>
export default {
    name: 'TabelaPontuacao',


}
</script>

<style scoped>
.table {
    margin-left: auto;
    margin-right: auto;
    padding-right: 5%;
}

th,
td {
    padding: 5%;
}
</style>