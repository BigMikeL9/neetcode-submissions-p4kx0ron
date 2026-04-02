public class Solution {
    // I will use three HashMaps to track the frequency of each num in rows, columns and boxes
    // Since each box is 3x3, the hashmap key for each element in the boxes will be a rounded int value of
    // r / 3 and c / 3 as a string
    // The key for the row and col hashMaps will be the row/col index. 
    // hashMap values will be HashSets containing nums. Using a HashMap and HashSet for O(1) lookups
    // Time Complexity will be O(9^3) or O(1) since we're dealing with a 9x9 board.
    // For a generalized board its O(n^2) where n is the number of cells
    // Space Complexity will be O(9^3) or O(1). O(n^2) in a generalized board

    public bool IsValidSudoku(char[][] board) {
        var rowHashMap = new Dictionary<int, HashSet<int>>();
        var colHashMap = new Dictionary<int, HashSet<int>>();
        var boxesHashMap = new Dictionary<(int, int), HashSet<int>>();

        for (var row = 0; row < board.Length; row++) {
            for (var col = 0; col < board.Length; col++) {
                var val = board[row][col];

                if(val == '.') continue;

                // 0 / 3 = 0
                // 1 / 3 = 0
                var boxKey = (row / 3, col / 3);

                Console.WriteLine(boxKey);

                if (!rowHashMap.ContainsKey(row)) rowHashMap[row] = new HashSet<int>();
                if (!colHashMap.ContainsKey(col)) colHashMap[col] = new HashSet<int>();
                if (!boxesHashMap.ContainsKey(boxKey)) boxesHashMap[boxKey] = new HashSet<int>();

                if (rowHashMap[row].Contains(val)) return false;
                if (colHashMap[col].Contains(val)) return false;
                if (boxesHashMap[boxKey].Contains(val)) return false;

                rowHashMap[row].Add(val);
                colHashMap[col].Add(val);
                boxesHashMap[boxKey].Add(val);
            }
        }

        return true;
    }
}
