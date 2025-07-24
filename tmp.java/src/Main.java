//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {

    public static String gcdOfStrings(String str1, String str2) {

        if (!str1.concat(str2).equals(str2.concat(str1))) {
            return "";
        }
        int lengthGCD = gcd(str1.length(), str2.length());
        return str1.substring(0, lengthGCD);
    }

    public static int gcd(int a, int b) {
        return (b == 0) ? a : gcd(b, a % b);
    }

    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        String word1 = "ABABAB";
        String word2 = "A";
        String result = gcdOfStrings(word1, word2);
        System.out.println(result);  // 輸出：apbqcrstu

    }
}