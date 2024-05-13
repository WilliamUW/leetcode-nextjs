import supabase from "./supabase";

export const questions = [
  {
    QID: 1,
    title: "Optimize Gas Usage in ERC-20 Token Contract",
    titleSlug: "optimize-erc20-gas-usage",
    difficulty: "Hard",
    acceptanceRate: 28.42,
    paidOnly: false,
    topicTags: "blockchain, smart-contracts, ethereum",
    Hints: [],
    Body: "The current implementation of our ERC-20 token smart contract consumes an excessive amount of gas for transactions. Your task is to refactor the contract to reduce gas consumption without altering the functionality. Submit your optimized Solidity code along with a comparison of gas usage before and after your optimizations.",
    categorySlug: "blockchain",
    reward: "0.01 ETH",
    Code: `
    pragma solidity ^0.8.0;

    contract ERC20Token {
        mapping(address => uint256) public balances;
        mapping(address => mapping(address => uint256)) public allowed;
        uint256 public totalSupply;

        constructor(uint256 initialSupply) {
            balances[msg.sender] = totalSupply = initialSupply;
        }

        function transfer(address to, uint256 value) public returns (bool) {
            require(balances[msg.sender] >= value, "Insufficient balance");
            balances[msg.sender] -= value;
            balances[to] += value;
            emit Transfer(msg.sender, to, value);
            return true;
        }

        function approve(address delegate, uint256 numTokens) public returns (bool) {
            allowed[msg.sender][delegate] = numTokens;
            emit Approval(msg.sender, delegate, numTokens);
            return true;
        }

        function allowance(address owner, address delegate) public view returns (uint) {
            return allowed[owner][delegate];
        }

        function transferFrom(address owner, address buyer, uint256 numTokens) public returns (bool) {
            require(numTokens <= balances[owner], "Insufficient balance");
            require(numTokens <= allowed[owner][msg.sender], "Insufficient allowance");

            balances[owner] -= numTokens;
            allowed[owner][msg.sender] -= numTokens;
            balances[buyer] += numTokens;
            emit Transfer(owner, buyer, numTokens);
            return true;
        }

        event Transfer(address indexed from, address indexed to, uint256 tokens);
        event Approval(address indexed owner, address indexed delegate, uint256 tokens);
    }
    `
  },
  {
    QID: 2,
    title: "Secure a DeFi Smart Contract",
    titleSlug: "secure-defi-smart-contract",
    difficulty: "Hard",
    acceptanceRate: 19.76,
    paidOnly: false,
    topicTags: "blockchain, defi, security",
    Hints: [],
    Body: "We have identified potential security vulnerabilities in our DeFi platform's smart contract, specifically in the functions handling liquidity withdrawals. Review the contract, identify security flaws, and provide a secure version of the contract code. Details of vulnerabilities and how they are addressed must be included in your submission.",
    categorySlug: "blockchain",
    reward: "0.05 ETH",
    Code: `
    pragma solidity ^0.8.0;

    interface IERC20 {
        function totalSupply() external view returns (uint256);
        function balanceOf(address account) external view returns (uint256);
        function transfer(address recipient, uint256 amount) external returns (bool);
        function allowance(address owner, address spender) external view returns (uint256);
        function approve(address spender, uint256 amount) external returns (bool);
        function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
        event Transfer(address indexed from, address indexed to, uint256 value);
        event Approval(address indexed owner, address indexed spender, uint256 value);
    }

    contract DeFiPlatform {
        address public admin;
        IERC20 public token;

        constructor(address tokenAddress) {
            admin = msg.sender;
            token = IERC20(tokenAddress);
        }

        function withdrawToken(uint256 amount) public {
            require(msg.sender == admin, "Unauthorized");
            require(token.balanceOf(address(this)) >= amount, "Insufficient balance");
            token.transfer(msg.sender, amount);
        }
    }
    `
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
  const question = [questions[qid - 1]];
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
