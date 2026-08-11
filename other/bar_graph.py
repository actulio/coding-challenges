import matplotlib.pyplot as plt
import numpy as np

def draw_tower_graph(heights):
    n = len(heights)
    x = np.arange(n)  # X-axis positions

    plt.bar(x, heights, color='skyblue', edgecolor='black')

    # Labeling the graph
    plt.xlabel("Tower Index")
    plt.ylabel("Height")
    plt.title("Tower Graph")
    plt.xticks(x)  # Ensuring each tower has a tick
    plt.grid(axis='y', linestyle='--', alpha=0.7)

    plt.show()

# Example usage
heights = [3, 7, 2, 5, 8, 6]
draw_tower_graph(heights)
