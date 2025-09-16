public static boolean closeStrings(String word1, String word2) {

    if (word1.length() != word2.length()) return false;

    Map<Character, Long> map1 = createMap(word1);
    Map<Character, Long> map2 = createMap(word2);

    if (!map1.keySet().equals(map2.keySet())) return false;

    List<Long> freq1 = new ArrayList<>(map1.values());
    List<Long> freq2 = new ArrayList<>(map2.values());

    Collections.sort(freq1);
    Collections.sort(freq2);

    return freq1.equals(freq2);
}

public static Map<Character, Long> createMap(String word) {
    Map<Character, Long> tmpMap = word.chars()
            .mapToObj(c -> (char) c)
            .collect(Collectors.groupingBy(c -> c, Collectors.counting()));
    return tmpMap;
}