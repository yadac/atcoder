using System;
using System.Collections.Generic;

class Program
{
    static int Q;
    static int used = 0;
    static Dictionary<(char, char), int> memo = new();

    static int Compare(char a, char b)
    {
        if (memo.TryGetValue((a, b), out var v)) return v;

        used++;
        Console.WriteLine($"? {a} {b}");
        Console.Out.Flush();

        string ans = Console.ReadLine();
        if (ans == "-1") Environment.Exit(0);

        int res = ans == "<" ? -1 : 1;
        memo[(a, b)] = res;
        memo[(b, a)] = -res;
        return res;
    }

    static void BinaryInsert(List<char> sorted, char x)
    {
        int L = 0, R = sorted.Count;
        while (L < R)
        {
            int mid = (L + R) / 2;
            if (Compare(x, sorted[mid]) < 0) R = mid;
            else L = mid + 1;
        }
        sorted.Insert(L, x);
    }

    // N=5, Q=7 を必ず7回で解く
    static void SolveN5()
    {
        char x1 = 'A', x2 = 'B';
        if (Compare(x2, x1) < 0) (x1, x2) = (x2, x1);

        char y1 = 'C', y2 = 'D';
        if (Compare(y2, y1) < 0) (y1, y2) = (y2, y1);

        if (Compare(y1, x1) < 0)
        {
            (x1, y1) = (y1, x1);
            (x2, y2) = (y2, x2);
        }

        var baseList = new List<char> { x1, y1, y2 };

        BinaryInsert(baseList, 'E');

        var tail = baseList.GetRange(1, baseList.Count - 1);
        BinaryInsert(tail, x2);

        Console.WriteLine($"! {baseList[0]}{string.Concat(tail)}");
        Console.Out.Flush();
    }

    static void Main()
    {
        var first = Console.ReadLine().Split();
        int N = int.Parse(first[0]);
        Q = int.Parse(first[1]);

        if (N == 5)
        {
            SolveN5();
            return;
        }

        var sorted = new List<char>();
        for (int i = 0; i < N; i++)
        {
            BinaryInsert(sorted, (char)('A' + i));
        }

        Console.WriteLine("! " + new string(sorted.ToArray()));
        Console.Out.Flush();
    }
}
