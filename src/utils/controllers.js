import supabase from "./supabase";

export const questions = [
  {
    QID: 1,
    title: "Two Sum",
    titleSlug: "two-sum",
    difficulty: "Easy",
    acceptanceRate: 52.55396011650703,
    paidOnly: false,
    topicTags: "array, hash-table",
    Hints: [],
    Body: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    categorySlug: "algorithms",
  },
  {
    QID: 2,
    title: "Add Two Numbers",
    titleSlug: "add-two-numbers",
    difficulty: "Medium",
    acceptanceRate: 42.859950980345964,
    paidOnly: false,
    topicTags: "linked-list, math, recursion",
    Hints: [],
    Body: "You are given two non-empty linked lists represented as two non-negative integers. The digits are stored in reverse order and each of their nodes contains a single digit. Add the two numbers and return it as a linked list.",
    categorySlug: "algorithms",
  },
  {
    QID: 3,
    title: "Longest Substring Without Repeating Characters",
    titleSlug: "longest-substring-without-repeating-characters",
    difficulty: "Medium",
    acceptanceRate: 34.793623837071145,
    paidOnly: false,
    topicTags: "hash-table, string, sliding-window",
    Hints: [],
    Body: "Given a string, find the length of the longest substring without repeating characters.",
    categorySlug: "algorithms",
  },
  {
    QID: 4,
    title: "Median of Two Sorted Arrays",
    titleSlug: "median-of-two-sorted-arrays",
    difficulty: "Hard",
    acceptanceRate: 40.04547290244275,
    paidOnly: false,
    topicTags: "array, binary-search, divide-and-conquer",
    Hints: [],
    Body: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    categorySlug: "algorithms",
  },
  {
    QID: 5,
    title: "Longest Palindromic Substring",
    titleSlug: "longest-palindromic-substring",
    difficulty: "Medium",
    acceptanceRate: 33.86432425465342,
    paidOnly: false,
    topicTags: "two-pointers, string, dynamic-programming",
    Hints: [],
    Body: "Given a string s, find the longest palindromic substring in s.",
    categorySlug: "algorithms",
  },
  {
    QID: 6,
    title: "Zigzag Conversion",
    titleSlug: "zigzag-conversion",
    difficulty: "Medium",
    acceptanceRate: 47.999998555342835,
    paidOnly: false,
    topicTags: "string",
    Hints: [],
    Body: "The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)",
    categorySlug: "algorithms",
  },
  {
    QID: 7,
    title: "Reverse Integer",
    titleSlug: "reverse-integer",
    difficulty: "Medium",
    acceptanceRate: 28.614205433266893,
    paidOnly: false,
    topicTags: "math",
    Hints: [],
    Body: "Given a 32-bit signed integer, reverse digits of an integer.",
    categorySlug: "algorithms",
  },
  {
    QID: 8,
    title: "String to Integer (atoi)",
    titleSlug: "string-to-integer-atoi",
    difficulty: "Medium",
    acceptanceRate: 17.26314621599306,
    paidOnly: false,
    topicTags: "string",
    Hints: [],
    Body: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).",
    categorySlug: "algorithms",
  },
  {
    QID: 9,
    title: "Palindrome Number",
    titleSlug: "palindrome-number",
    difficulty: "Easy",
    acceptanceRate: 56.37926183311811,
    paidOnly: false,
    topicTags: "math",
    Hints: [],
    Body: "Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.",
    categorySlug: "algorithms",
  }
];


export async function getQuestionsList(term) {
  // const dataPromise =
  //   term.length === 0
  //     ? supabase.rpc("all_questions_list", { term })
  //     : supabase.rpc("queried_questions_list", { term });
  // let { data, error } = await dataPromise;
  // if (error) {
  //   console.error(error.message);
  //   return { error };
  // } else return { data };
  return { data: questions };
}

export async function getQuestion(qid) {
  console.log(qid)
  const question = questions.find((question) => question.QID === qid);
  // let { data, error } = await supabase
  //   .from("questions")
  //   .select("*")
  //   .eq("QID", qid);
  // if (error) {
  //   console.error(error.message);
  //   return { error };
  // } else {
  //   return { data };
  // }
  console.log(question)
  return { data: question };
}

export async function getSimilarQuestions(qid) {
  // let { data, error } = await supabase.rpc("get_similar_questions", { qid });
  // if (error) {
  //   console.error(error.message);
  //   return { error };
  // } else {
  //   return { data };
  // }
  return { data: questions };
}
