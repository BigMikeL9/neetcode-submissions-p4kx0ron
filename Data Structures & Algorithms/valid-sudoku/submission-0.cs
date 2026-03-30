public class Solution {
    public bool IsValidSudoku(char[][] board) {
        // I will create three HashMaps for rows, columns and 3x3 boxes
        // Rows and columns hashmaps will cotains the index as key and a HashSet as value storing cell digits.
        // 3x3 boxes key will be the (row / 3, col / 3), because integer division groups result in 9 boxes
        // the value will also be a HashSet storing cell digit.
        // I will first initialise the HashSet if it doesn't exist, then check if the cell value exist in 
        // each HashSet, if it does in any return false, if it doesn't add it. 
        // Since each cell exist in all three, I will add it to each. 

        // I'm using a HashMap and HashSet for O(1) lookup and insertions
        // So Time Complexity for fixed size soduko will O(9^2) or O(1). For a generalised board it will be O(n^2)
        // Space Complexity for 9x9 board will be O(9^2 + 9^2 + 9^2) or O(1). 
        // For a generalised board it will be O(n^2 + n^2 + n^2) or O(n^2)

        var rowsHashMap = new Dictionary<int, HashSet<char>>();
        var colsHashMap = new Dictionary<int, HashSet<char>>();
        var boxesHashMap = new Dictionary<(int, int), HashSet<char>>();

        for (var row = 0; row < board.Length; row++) {
            for (var col = 0; col < board.Length; col++) {
                var val = board[row][col];

                if(val == '.') continue;

                var boxKey = (row / 3, col / 3);

                Console.WriteLine(boxKey);

                // Initialise HashSets
                if(!rowsHashMap.ContainsKey(row)) rowsHashMap[row] = new HashSet<char>();
                if(!colsHashMap.ContainsKey(col)) colsHashMap[col] = new HashSet<char>();
                if(!boxesHashMap.ContainsKey(boxKey)) boxesHashMap[boxKey] = new HashSet<char>();

                // Check if cell digit exist in each
                if(rowsHashMap[row].Contains(val)) return false;
                if(colsHashMap[col].Contains(val)) return false;
                if(boxesHashMap[boxKey].Contains(val)) return false;

                // Add cell digits to each HashSet
                rowsHashMap[row].Add(val);
                colsHashMap[col].Add(val);
                boxesHashMap[boxKey].Add(val);
            }
        }

        return true;
    }
}
