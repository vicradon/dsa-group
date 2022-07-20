class Solution {
    fun groupAnagrams(strs: Array<String>): List<List<String>> {
        val group: MutableMap<String, MutableList<String>> = mutableMapOf()
        if (strs.size == 1) return listOf(strs.toMutableList())
        else {
            strs.forEach {
                val key = it.toCharArray().sorted().joinToString("")
                if (group.containsKey(key)){
                    group[key]!!.add(it)
                } else {
                    group[key] = mutableListOf(it)
                }
            }

            val solution = mutableListOf<MutableList<String>>()
            group.values.forEach {
                solution.add(it)
            }
            return solution
        }
    }
}