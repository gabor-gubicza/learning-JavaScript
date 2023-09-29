def get_choices():
    player_choice = input("Enter a choice: R,P,S: ")
    computer_choice = "paper"
    choices {"player" : player_choice , "computer":computer_choice}
    return player_choice



choices = get_choices()
print(choices)

""" def greeting():
    return "Hi"

response = greeting()
print(response) """